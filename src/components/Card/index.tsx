import Image from 'next/image';

import styles from './Card.module.css';
import QuestionList from './QuestionList';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image src="/fm-faq-accordion/icon-star.svg" alt="star" width={24} height={24} />
        <h1 className={styles.title}>FAQs</h1>
      </div>
      <QuestionList />
    </div>
  );
};

export default Card;
