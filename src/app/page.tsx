import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundPattern} />
      <div className={styles.card}></div>
    </main>
  );
};

export default Home;
