import { QUESTIONS } from '@/constants';
import Image from 'next/image';

import styles from './QuestionList.module.css';

const QuestionList = () => {
  return (
    <ul className={styles.questionList}>
      {QUESTIONS.map(question => (
        <li key={question.key} className={styles.questionItem}>
          <div className={styles.title}>
            <h2 className={styles.text}>{question.title}</h2>
            <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
          </div>
          <p className={styles.answer}>{question.answer}</p>
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
