import { useEffect, useState } from 'react';
import FullCalendar, { DateSelectArg, EventInput } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import PageContent from '@/components/PageContent';
import EventModal from './EventModal';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000";

const Calendar = () => {
  const [events, setEvents] = useState<EventInput[]>([]);
  const [editable, setEditable] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [employees, setEmployees] = useState<{ id: number; border_color: string }[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE_URL}/api/employees/`).then(res => res.json()),
      fetch(`${API_BASE_URL}/api/bookings/`).then(res => res.json())
    ])
    .then(([employeeData, bookingData]) => {
      const employeeMap = employeeData.reduce((acc: Record<number, string>, emp: any) => {
        acc[emp.id] = emp.border_color || 'black';
        return acc;
      }, {});
  
      setEmployees(employeeData);
  
      const formattedEvents = bookingData.map((booking: any) => ({
        id: booking.id,
        title: `${booking.customer_name} - ${booking.service_details?.name || 'Unknown Service'}`,
        start: `${booking.booking_date}T${booking.booking_time}`,
        end: booking.booking_end_time ? `${booking.booking_date}T${booking.booking_end_time}` : undefined,
        borderColor: employeeMap[booking.employee] || 'black',
        display: 'block',
        customer_name: booking.customer_name,
        phone: booking.phone,
        employee: booking.employee,
        duration: booking.duration,
        service_details: booking.service_details
      }));
  
      setEvents(formattedEvents);
    })
    .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  
  const handleAddEvent = (newBooking: any) => {
    const employeeColor = employees.find(emp => emp.id === newBooking.employee)?.border_color || 'black';

    const serviceName = newBooking.service_details?.name || "Unknown Service"; 

    const bookingDateTime = new Date(`${newBooking.booking_date}T${newBooking.booking_time}`);
    const localStart = new Date(bookingDateTime.getTime() - bookingDateTime.getTimezoneOffset() * 60000);
  
    const localEnd = newBooking.duration 
      ? new Date(localStart.getTime() + newBooking.duration * 60000)
      : new Date(localStart.getTime() + 60 * 60000);

    const newEvent = {
      id: newBooking.id,
      title: `${newBooking.customer_name} - ${serviceName}`,
      start: localStart.toISOString(),
      end: localEnd.toISOString(),
      borderColor: employeeColor,
      display: 'block',
      customer_name: newBooking.customer_name,
      phone: newBooking.phone,
      employee: newBooking.employee,
      duration: newBooking.duration,
      service_details: newBooking.service_details
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
};


  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const startDate = new Date(selectInfo.startStr);
    const isMonthView = selectInfo.view.type === "dayGridMonth";
    
    setSelectedDate(startDate);
    setSelectedTime(isMonthView ? null : new Date(selectInfo.startStr));
    setEditable(true);
  };

  const handleEventClick = (clickInfo: any) => {
    const eventId = Number(clickInfo.event.id);
    const clickedEvent = events.find(event => event.id === eventId);
    
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
      setEditable(true);
    }
  };

  const handleEventDrop = (dropInfo: any) => {
    const eventId = Number(dropInfo.event.id);
    const newDate = dropInfo.event.start;
    if (!eventId || !newDate) return;

    const updatedEvent = events.find(event => event.id === eventId);
    if (!updatedEvent) return;

    const formattedDate = newDate.toISOString().split('T')[0];
    const formattedTime = newDate.toISOString().split('T')[1].substring(0, 5);

    const updatedBooking = {
      ...updatedEvent,
      booking_date: formattedDate,
      booking_time: formattedTime,
      duration: updatedEvent.duration,
    };

    fetch(`${API_BASE_URL}/api/bookings/${eventId}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBooking),
    })
    .then((res) => res.json())
    .then((updatedBooking) => {
      setEvents(events.map(event =>
        event.id === eventId 
          ? { ...event, start: dropInfo.event.start.toISOString(), duration: updatedBooking.duration }
          : event
      ));
    })
    .catch((error) => console.error("Error updating booking:", error));
  };

  return (
    <PageContent className="calendar-app">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView="dayGridMonth"
        weekends
        editable
        selectable
        selectMirror
        dayMaxEvents
        slotMinTime="09:00:00"
        slotMaxTime="21:00:00"
        nextDayThreshold={'09:00:00'}
        allDaySlot={false} 
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop} 
        eventContent={(eventInfo) => (
          <div style={{ borderLeft: `4px solid ${eventInfo.event.borderColor}`, paddingLeft: '5px' }}>
            <b>{eventInfo.timeText}</b>
            <span>{eventInfo.event.title}</span>
          </div>
        )}
      />
      <EventModal
        open={editable}
        onClose={() => { setEditable(false); setSelectedEvent(null); }}
        onAddEvent={handleAddEvent}
        onDeleteEvent={(eventId) => setEvents(events.filter(event => event.id !== eventId))}
        selectedEvent={selectedEvent}
        selectedDate={selectedDate} 
        selectedTime={selectedTime} 
      />
    </PageContent>
  );
};

export default Calendar;
