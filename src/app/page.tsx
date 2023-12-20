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
        <div className={styles.questions}>
          <div className={styles.question}>
            <div className={styles.title}>
              <div className={styles.text}>What is Frontend Mentor, and how will it help me?</div>
              <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.title}>
              <div className={styles.text}>Is Frontend Mentor free?</div>
              <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.title}>
              <div className={styles.text}>Can I use Frontend Mentor projects in my portfolio?</div>
              <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.title}>
              <div className={styles.text}>How can I get help if I&apos;m stuck on a challenge?</div>
              <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
