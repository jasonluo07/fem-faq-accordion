import Image from 'next/image';

import styles from './QuestionList.module.css';

const QuestionList = () => {
  return (
    <ul className={styles.questionList}>
      <li className={styles.questionItem}>
        <div className={styles.title}>
          <h2 className={styles.text}>What is Frontend Mentor, and how will it help me?</h2>
          <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
        </div>
      </li>
      <li className={styles.questionItem}>
        <div className={styles.title}>
          <h2 className={styles.text}>Is Frontend Mentor free?</h2>
          <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
        </div>
      </li>
      <li className={styles.questionItem}>
        <div className={styles.title}>
          <h2 className={styles.text}>Can I use Frontend Mentor projects in my portfolio?</h2>
          <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
        </div>
      </li>
      <li className={styles.questionItem}>
        <div className={styles.title}>
          <h2 className={styles.text}>How can I get help if I&apos;m stuck on a challenge?</h2>
          <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
        </div>
      </li>
    </ul>
  );
};

export default QuestionList;
