import Card from '@/components/Card';

import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundPattern} />
      <Card />
    </main>
  );
};

export default Home;
