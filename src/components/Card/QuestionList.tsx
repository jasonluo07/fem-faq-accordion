'use client';

import { QUESTIONS } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';

import styles from './QuestionList.module.css';

const QuestionList = () => {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  return (
    <ul className={styles.questionList}>
      {QUESTIONS.map(({ key, title, answer }) => {
        const isOpen = openQuestions.has(key);

        const handleToggle = () => {
          const newOpenQuestions = new Set(openQuestions);
          isOpen ? newOpenQuestions.delete(key) : newOpenQuestions.add(key);
          setOpenQuestions(newOpenQuestions);
        };

        return (
          <li key={key} className={styles.questionItem}>
            <div className={styles.header} onClick={handleToggle}>
              <h2 className={styles.title}>{title}</h2>
              {isOpen ? (
                <Image src="/icon-minus.svg" alt="minus" width={30} height={30} />
              ) : (
                <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
              )}
            </div>
            {isOpen && <p className={styles.answer}>{answer}</p>}
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionList;
