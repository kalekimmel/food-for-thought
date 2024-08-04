import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Back to School Meeting',
      start: new Date(2024, 7, 26, 10, 0), // Date is in format: year, month (0-indexed), day, hour, minute
      end: new Date(2024, 7, 26, 11, 0),
    },
    {
        title: 'Food Giveaway',
        start: new Date(2024, 7, 31, 10, 0), // Date is in format: year, month (0-indexed), day, hour, minute
        end: new Date(2024, 7, 31, 11, 0),
      },
  ]);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
};

export default EventCalendar;