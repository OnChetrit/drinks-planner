import { getAllEvents } from '@/app/actions';
import React from 'react';

const EventsTable = async () => {
  const events = await getAllEvents();
  const columns = Object.keys(events[0]);
  console.log('events', events);
  return (
    <table>
      <thead>
        {columns.map((column) => {
          return <th key={column}>{column}</th>;
        })}
      </thead>
      <tbody>
        {events.map((ev) => {
          const values = Object.values(ev);
          return (
            <tr>
              {values.map((value) => {
                return <td>{value?.toString()}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EventsTable;
