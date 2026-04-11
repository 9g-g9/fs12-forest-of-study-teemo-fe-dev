import styles from './ModalLayout.module.css';

const Modal = ({ title, children }) => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.header}>{title}</div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
