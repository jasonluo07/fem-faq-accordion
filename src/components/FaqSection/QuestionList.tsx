'use client';

import type { IQuestion } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

import styles from './QuestionList.module.css';

type QuestionListProp = {
  questions: IQuestion[];
};

const QuestionList = ({ questions }: QuestionListProp) => {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  return (
    <ul className={styles.questionList}>
      {questions.map(({ key, title, answer }) => {
        const isOpen = openQuestions.has(key);
        const displayIcon = isOpen ? 'minus' : 'plus';

        const handleToggle = () => {
          const newOpenQuestions = new Set(openQuestions);
          isOpen ? newOpenQuestions.delete(key) : newOpenQuestions.add(key);
          setOpenQuestions(newOpenQuestions);
        };

        return (
          <li key={key} className={styles.questionItem}>
            <div className={styles.header} onClick={handleToggle}>
              <h2 className={styles.title}>{title}</h2>
              <Image
                src={`/fem-faq-accordion/images/icon-${displayIcon}.svg`}
                alt={displayIcon}
                width={30}
                height={30}
              />
            </div>
            {isOpen && <p className={styles.answer}>{answer}</p>}
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionList;
