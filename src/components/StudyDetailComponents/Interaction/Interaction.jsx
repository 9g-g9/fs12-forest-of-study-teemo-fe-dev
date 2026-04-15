import styles from './Interaction.module.css';

const Interaction = ({ onClick }) => {
  return (
    <ul className={styles.interContainer}>
      <li className={styles.greenText}>
        <button>공유하기</button>
      </li>
      <li className={styles.greenText}>|</li>
      <li className={styles.greenText}>
        <button onClick={() => onClick('edit')}>수정하기</button>
      </li>
      <li className={styles.grayText}>|</li>
      <li className={styles.grayText}>
        <button>스터디 삭제하기</button>
      </li>
    </ul>
  );
};

export default Interaction;
