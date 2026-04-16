import styles from './Emoji.module.css';

const Emoji = ({ emoji, count, type }) => {
  return (
    <div className={styles.item}>
      <span className={type !== 'big' ? styles.small : ''} aria-hidden="true">
        {emoji}
      </span>
      <span className={type !== 'big' ? styles.small : ''}>{count}</span>
    </div>
  );
};

export default Emoji;
