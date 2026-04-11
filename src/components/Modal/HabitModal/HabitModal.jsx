import ModalLayout from '../ModalLayout';
import styles from './HabitModal.module.css';

const HabitModal = ({ title, children }) => {
  return (
    <ModalLayout>
      <div className={styles.header}>{title}</div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <button className="btn">취소</button>
        <button className="btn">수정 완료</button>
      </div>
    </ModalLayout>
  );
};

export default HabitModal;
