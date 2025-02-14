import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import PageContent from '@/components/PageContent';
import { INITIAL_EVENTS } from './event-utils';
import EventModal from './EventModal';
const Calendar = () => {
    const [editable, setEditable] = React.useState(false);
    const handleDateSelect = (selectInfo) => {
        console.log(selectInfo);
        setEditable(true);
    };
    const handleEventClick = (clickInfo) => {
        console.log(clickInfo);
        setEditable(true);
    };
    return (React.createElement(PageContent, { className: "calendar-app" },
        React.createElement(FullCalendar, { plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }, initialView: "dayGridMonth", weekends: true, editable: true, selectable: true, selectMirror: true, dayMaxEvents: true, nextDayThreshold: '09:00:00', initialEvents: INITIAL_EVENTS, select: handleDateSelect, eventContent: renderEventContent, eventClick: handleEventClick }),
        React.createElement(EventModal, { open: editable, onClose: () => setEditable(false), onAddEvent: () => {
                setEditable(false);
            } })));
};
function renderEventContent(eventContent) {
    const { timeText, event } = eventContent;
    return (React.createElement(React.Fragment, null,
        timeText && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "fc-daygrid-event-dot" }),
            React.createElement("div", { className: "fc-event-time" }, eventContent.timeText))),
        React.createElement("div", { className: "fc-event-title" }, event.title)));
}
export default Calendar;
//# sourceMappingURL=Calendar.js.map