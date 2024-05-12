import AddEventForm from '@/components/AddEventForm/addEventForm';
import s from './page.module.scss';
import EventsTable from '@/components/EventsTable/eventsTable';
import EventContextProvider from '@/context/eventContextProvider';

export default function Home() {
  return (
    <main className={s.main}>
      <h1>Drinks Calculator</h1>
      <EventContextProvider>
        <AddEventForm />
      </EventContextProvider>
      <EventsTable />
    </main>
  );
}
