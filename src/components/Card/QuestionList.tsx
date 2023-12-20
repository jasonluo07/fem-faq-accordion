import Image from 'next/image';

import styles from './QuestionList.module.css';

const QuestionList = () => {
  return (
    <ul className={styles.questionList}>
      <li className={styles.questionItem}>
        <div className={styles.title}>
          <h2 className={styles.text}>What is Frontend Mentor, and how will it help me?</h2>
          <Image src="/icon-minus.svg" alt="minus" width={30} height={30} />
        </div>
        <p className={styles.answer}>
          Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills
          with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.
        </p>
      </li>
      <li className={styles.questionItem}>
        <div className={styles.title}>
          <h2 className={styles.text}>Is Frontend Mentor free?</h2>
          <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
        </div>
        <p className={styles.answer}>
          Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to
          a range of projects suitable for all skill levels.
        </p>
      </li>
      <li className={styles.questionItem}>
        <div className={styles.title}>
          <h2 className={styles.text}>Can I use Frontend Mentor projects in my portfolio?</h2>
          <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
        </div>
        <p className={styles.answer}>
          Yes, you can use projects completed on Frontend Mentor in your portfolio. It&apos;s an excellent way to
          showcase your skills to potential employers!
        </p>
      </li>
      <li className={styles.questionItem}>
        <div className={styles.title}>
          <h2 className={styles.text}>How can I get help if I&apos;m stuck on a challenge?</h2>
          <Image src="/icon-plus.svg" alt="plus" width={30} height={30} />
        </div>
        <p className={styles.answer}>
          The best place to get help is inside Frontend Mentor&apos;s Discord community. There&apos;s a help channel
          where you can ask questions and seek support from other community members.
        </p>
      </li>
    </ul>
  );
};

export default QuestionList;
