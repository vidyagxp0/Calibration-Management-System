import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => (
  <div style={{ height: '500px' }}>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      views={['month']} // Only show month view
      defaultView="month" // Default to month view
    />
  </div>
);

export default MyCalendar;
