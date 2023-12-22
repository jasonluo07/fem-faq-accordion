import { QUESTIONS } from '@/constants';
import Image from 'next/image';

import styles from './FaqSection.module.css';
import QuestionList from './QuestionList';

const FaqSection = () => {
  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <Image
          src="/fem-faq-accordion/images/icon-star.svg"
          alt="star"
          className={styles.star}
          width={24}
          height={24}
        />
        <h1 className={styles.title}>FAQs</h1>
      </div>
      <QuestionList questions={QUESTIONS} />
    </section>
  );
};

export default FaqSection;
