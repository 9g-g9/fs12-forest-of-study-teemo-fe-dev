import styles from './Emoji.module.css';

const Emoji = ({ emoji, count }) => {
  return (
    <div className={styles.item}>
      <span className={styles.symbol} aria-hidden="true">
        {emoji}
      </span>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default Emoji;
