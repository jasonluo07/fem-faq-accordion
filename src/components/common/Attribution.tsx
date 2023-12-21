import styles from './Attribution.module.css';

const Attribution = () => {
  return (
    <div className={styles.attribution}>
      Coded by{' '}
      <a className={styles.link} href="https://github.com/jasonluo07" target="_blank">
        Jason Luo
      </a>
      .
    </div>
  );
};

export default Attribution;
