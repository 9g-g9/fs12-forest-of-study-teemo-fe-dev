import styles from './Interaction.module.css';

const Interaction = () => {
  return (
    <ul className={styles.interContainer}>
      <li className={styles.greenText}>공유하기</li>
      <li className={styles.greenText}>|</li>
      <li className={styles.greenText}>수정하기</li>
      <li className={styles.grayText}>|</li>
      <li className={styles.grayText}>스터디 삭제하기</li>
    </ul>
  );
};

export default Interaction;
