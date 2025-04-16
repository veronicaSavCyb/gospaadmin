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
      console.log("Fetched Booking Data:", bookingData);

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
      console.log("Formatted Events:", formattedEvents);   
      setEvents(formattedEvents);
    })
    .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  
  const handleAddEvent = (updatedBooking: any) => {
    const employeeColor = employees.find(emp => emp.id === updatedBooking.employee)?.border_color || 'black';
    const serviceName = updatedBooking.service_details?.name || "Unknown Service";

    const bookingDateTime = new Date(`${updatedBooking.booking_date}T${updatedBooking.booking_time}`);
    const localStart = new Date(bookingDateTime.getTime() - bookingDateTime.getTimezoneOffset() * 60000);

    const localEnd = updatedBooking.duration 
        ? new Date(localStart.getTime() + updatedBooking.duration * 60000)
        : new Date(localStart.getTime() + 60 * 60000);

    setEvents(prevEvents => {
        const eventExists = prevEvents.some(event => event.id === updatedBooking.id);

        return eventExists
            ? prevEvents.map(event =>
                event.id === updatedBooking.id
                    ? { 
                        ...event,
                        title: `${updatedBooking.customer_name} - ${serviceName}`,
                        start: localStart.toISOString(),
                        end: localEnd.toISOString(),
                        borderColor: employeeColor,
                        service_details: updatedBooking.service_details, // ✅ Ensure this is stored
                        customer_name: updatedBooking.customer_name,     // ✅ Store customer name
                        phone: updatedBooking.phone,                     // ✅ Store phone number
                        employee: updatedBooking.employee,               // ✅ Store employee
                        duration: updatedBooking.duration,               // ✅ Store duration
                    }
                    : event
            )
            : [...prevEvents, {
                id: updatedBooking.id,
                title: `${updatedBooking.customer_name} - ${serviceName}`,
                start: localStart.toISOString(),
                end: localEnd.toISOString(),
                borderColor: employeeColor,
                display: 'block',
                service_details: updatedBooking.service_details, // ✅ Ensure this is stored
                customer_name: updatedBooking.customer_name,
                phone: updatedBooking.phone,
                employee: updatedBooking.employee,
                duration: updatedBooking.duration,
            }];
    });
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

    console.log("Clicked Event Data:", clickedEvent);
    
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
        initialView="timeGridDay"
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
        eventContent={(eventInfo) => {
          const eventTime = new Date(eventInfo.event.start as string).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const customerName = eventInfo.event.extendedProps?.customer_name || "Unknown";
          const serviceName = eventInfo.event.extendedProps?.service_details?.name || "Unknown Service";
        
          // Detect if we're in month view to apply text truncation
          const isMonthView = eventInfo.view.type === "dayGridMonth";
        
          return (
            <div style={{
              borderLeft: `4px solid ${eventInfo.event.borderColor}`,
              paddingLeft: '5px',
              whiteSpace: isMonthView ? 'nowrap' : 'normal',  // No wrapping for month view, wrap otherwise
              overflow: isMonthView ? 'hidden' : 'visible',   // Hide overflow only in month view
              textOverflow: isMonthView ? 'ellipsis' : 'clip', // Apply ellipsis only in month view
              maxWidth: isMonthView ? '100%' : 'unset',       // Constrain width only in month view
              wordWrap: isMonthView ? 'normal' : 'break-word' // Break words in week and day views
            }}>
              <b>{eventTime} </b>
              <span>{customerName} {serviceName}</span>
            </div>
          );
        }}
        
        
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
