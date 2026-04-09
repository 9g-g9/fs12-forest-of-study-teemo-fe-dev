import styles from './Modal.module.css';

const Modal = ({ title, children }) => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
