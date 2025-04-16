import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Button,
  Form,
  SelectPicker,
  Checkbox,
  IconButton,
} from 'rsuite';
import CloseIcon from '@rsuite/icons/Close';
import CopyIcon from '@rsuite/icons/legacy/Copy';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000";

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const timeOptions = Array.from({ length: 13 }, (_, i) => {
  const hour = i + 9;
  return {
    label: `${hour.toString().padStart(2, '0')}:00`,
    value: `${hour.toString().padStart(2, '0')}:00`
  };
});

interface TimeSlot {
  start: string;
  end: string;
}

const ScheduleDrawer = ({
  open,
  onClose,
  employeeName,
  employeeId
}: {
  open: boolean;
  onClose: () => void;
  employeeName?: string;
  employeeId: number;
}) => {
  const [selectedDays, setSelectedDays] = useState<Record<string, boolean>>(
    Object.fromEntries(daysOfWeek.map(day => [day, false]))
  );

  const [intervals, setIntervals] = useState<Record<string, TimeSlot[]>>(
    Object.fromEntries(daysOfWeek.map(day => [day, [{ start: '', end: '' }]]))
  );

  useEffect(() => {
    if (open && employeeId > 0) {
      const initialIntervals = Object.fromEntries(daysOfWeek.map(day => [day, [{ start: '', end: '' }]]));
      const initialSelected = Object.fromEntries(daysOfWeek.map(day => [day, false]));

      setIntervals(initialIntervals);
      setSelectedDays(initialSelected);

      fetch(`${API_BASE_URL}/api/schedules/?employee=${employeeId}`)
        .then(res => res.json())
        .then((data) => {
          const newIntervals: Record<string, TimeSlot[]> = Object.fromEntries(
            daysOfWeek.map(day => [day, []])
          );
          const newSelectedDays: Record<string, boolean> = {};

          data.forEach((item: any) => {
            if (!newIntervals[item.day]) newIntervals[item.day] = [];
            newIntervals[item.day].push({
              start: item.start_time.slice(0, 5),
              end: item.end_time.slice(0, 5)
            });
            newSelectedDays[item.day] = true;
          });

          daysOfWeek.forEach(day => {
            if (!newIntervals[day] || newIntervals[day].length === 0) {
              newIntervals[day] = [{ start: '', end: '' }];
              newSelectedDays[day] = false;
            }
          });

          setIntervals(newIntervals);
          setSelectedDays(newSelectedDays);
        })
        .catch(err => console.error("Failed to load schedule:", err));
    }
  }, [open, employeeId]);

  const toggleAllDays = (checked: boolean) => {
    setSelectedDays(Object.fromEntries(daysOfWeek.map(day => [day, checked])));
  };

  const updateTimeSlot = (day: string, index: number, field: 'start' | 'end', value: string) => {
    const updated = [...intervals[day]];
    updated[index][field] = value;
    setIntervals({ ...intervals, [day]: updated });
  };

  const addInterval = (day: string) => {
    setIntervals({ ...intervals, [day]: [...intervals[day], { start: '', end: '' }] });
  };

  const removeInterval = (day: string, index: number) => {
    if (intervals[day].length <= 1) return;
    const updated = intervals[day].filter((_, i) => i !== index);
    setIntervals({ ...intervals, [day]: updated });
  };

  const copyToAllDays = (sourceDay: string) => {
    const sourceSlots = intervals[sourceDay];
    const updated = Object.fromEntries(daysOfWeek.map(day => [day, [...sourceSlots]]));
    setIntervals(updated);
  };

  const parseTime = (time: string) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const isValidInterval = (slot: TimeSlot) => {
    if (!slot.start || !slot.end) return true;
    return parseTime(slot.start) < parseTime(slot.end);
  };

  const hasOverlap = (slots: TimeSlot[]) => {
    const parsed = slots
      .filter(slot => slot.start && slot.end && isValidInterval(slot))
      .map(slot => [parseTime(slot.start), parseTime(slot.end)])
      .sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < parsed.length; i++) {
      if (parsed[i][0] < parsed[i - 1][1]) {
        return true;
      }
    }
    return false;
  };

  const saveSchedule = async () => {
    const payload: any[] = [];

    Object.entries(intervals).forEach(([day, slots]) => {
      if (selectedDays[day]) {
        slots.forEach((slot) => {
          if (slot.start && slot.end && isValidInterval(slot)) {
            payload.push({
              employee: employeeId,
              day,
              start_time: slot.start,
              end_time: slot.end
            });
          }
        });
      }
    });

    await fetch(`${API_BASE_URL}/api/schedules/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    onClose();
  };

  return (
    <Drawer
      backdrop="static"
      size="sm"
      placement="right"
      open={open}
      onClose={onClose}
      style={{ width: 700, maxWidth: '100%' }}
    >
      <Drawer.Header>
        <Drawer.Title>Schedule for {employeeName || 'Employee'}</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={saveSchedule} appearance="primary">Save</Button>
          <Button onClick={onClose} appearance="subtle">Cancel</Button>
        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body style={{ padding: 0 }}>
        <Form fluid>
          {daysOfWeek.map((day) => {
            const slots = intervals[day];
            const overlap = hasOverlap(slots);
            return (
              <div key={day} style={{ borderBottom: '1px solid #e5e5e5', padding: '16px 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', alignItems: 'flex-start', gap: '16px' }}>
                  <Checkbox
                    checked={selectedDays[day]}
                    onChange={(_, checked) =>
                      setSelectedDays({ ...selectedDays, [day]: checked })
                    }
                  >
                    {day}
                  </Checkbox>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {slots.map((slot, index) => (
                      <div key={index}>
                        <div
                          style={{
                            display: 'flex',
                            gap: 10,
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            position: 'relative'
                          }}
                        >
                          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', position: 'relative' }}>
                            <SelectPicker
                              data={timeOptions}
                              placeholder="Start"
                              value={slot.start}
                              onChange={(val) => updateTimeSlot(day, index, 'start', val)}
                              style={{ width: 100 }}
                              searchable={false}
                              cleanable={false}
                            />
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
                              <SelectPicker
                                data={timeOptions}
                                placeholder="End"
                                value={slot.end}
                                onChange={(val) => updateTimeSlot(day, index, 'end', val)}
                                style={{ width: 100 }}
                                searchable={false}
                                cleanable={false}
                              />
                              {slots.length > 1 && (
                                <IconButton
                                  icon={<CloseIcon />}
                                  size="xs"
                                  circle
                                  appearance="subtle"
                                  onClick={() => removeInterval(day, index)}
                                  style={{ marginLeft: 6, marginTop: 2 }}
                                />
                              )}
                            </div>
                          </div>
                          {index === 0 && (
                            <div style={{ display: 'flex', gap: 10 }}>
                              <Button
                                size="xs"
                                appearance="link"
                                onClick={() => addInterval(day)}
                              >
                                + Add interval
                              </Button>
                              <Button
                                size="xs"
                                appearance="link"
                                onClick={() => copyToAllDays(day)}
                              >
                                <CopyIcon style={{ marginRight: 6 }} />
                                Copy to all days
                              </Button>
                            </div>
                          )}
                        </div>
                        {!isValidInterval(slot) && (
                          <div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>
                            Start time must be before end time
                          </div>
                        )}
                      </div>
                    ))}
                    {overlap && (
                      <div style={{ color: 'red', fontSize: 12 }}>
                        Time intervals must not overlap
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default ScheduleDrawer;
