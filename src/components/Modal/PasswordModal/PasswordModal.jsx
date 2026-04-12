import ModalLayout from '../ModalLayout';
import styles from './PasswordModal.module.css';

const PasswordModal = ({ title, children, btnTitle }) => {
  return (
    <>
      <ModalLayout>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <button type="button" className={styles.closeBtnDesktop}>
            나가기
          </button>
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          <button className="btn">{btnTitle}</button>
          <button type="button" className={styles.closeBtnMobile}>
            나가기
          </button>
        </div>
      </ModalLayout>
    </>
  );
};

export default PasswordModal;
