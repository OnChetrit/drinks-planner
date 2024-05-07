import AddEventForm from '@/components/addEventForm';
import s from './page.module.scss';

export default function Home() {
  return (
    <main className={s.main}>
      <h1>Drinks App</h1>
      <AddEventForm />
    </main>
  );
}
