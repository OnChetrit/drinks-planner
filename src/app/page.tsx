import AddEventForm from '@/components/addEventForm';
import s from './page.module.scss';
import EventsTable from '@/components/EventsTable/eventsTable';

export default function Home() {
  return (
    <main className={s.main}>
      <h1>Drinks App</h1>
      <AddEventForm />
      <EventsTable/>
    </main>
  );
}
