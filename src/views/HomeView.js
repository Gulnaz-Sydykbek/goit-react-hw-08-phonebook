import s from './View.module.css';

function HomeView() {
  return (
    <div className={s.main}>
      <h1 className={s.welkom}>Welkom to the phonebook!</h1>
    </div>
  );
}

export default HomeView;
