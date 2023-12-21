import FaqSection from '@/components/FaqSection';

import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundPattern} />
      <FaqSection />
    </main>
  );
};

export default Home;
