import QuestionList from '@/components/QuestionList';
import Image from 'next/image';

import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundPattern} />
      <div className={styles.card}>
        <div className={styles.header}>
          <Image src="/icon-star.svg" alt="star" width={24} height={24} />
          <h1 className={styles.title}>FAQs</h1>
        </div>
        <QuestionList />
      </div>
    </main>
  );
};

export default Home;
