import { getEvents } from '@/app/actions';
import React from 'react';
import s from './eventsTable.module.scss';

const EventsTable = async () => {
  const events = await getEvents();
  console.log('events', events);
  const columns = events.length ? Object.keys(events[0]) : [];

  return (
    <table className={s.root}>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {events.map((ev) => {
          const values = Object.values(ev);
          return (
            <tr key={ev.id}>
              {values.map((value) => {
                return <td key={ev.id + value?.toString()!}>{value?.toString()}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EventsTable;
