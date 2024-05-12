import { getEvents } from '@/app/actions';
import React from 'react';
import s from './eventsTable.module.scss';

const EventsTable = async () => {
  const events = await getEvents();
  console.log('events', events);
  const columns = events.length ? Object.keys(events[0]) : [];

  if (!columns.length) {
    return (
      <div className='no-result'>
        <h2>No results found</h2>
      </div>
    );
  }

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
          console.log('values', values);
          return (
            <tr key={ev.id as Key}>
              {values.map((value, index) => {
                return <td key={ev.id + index + value?.toString()!}>{value?.toString()}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EventsTable;
