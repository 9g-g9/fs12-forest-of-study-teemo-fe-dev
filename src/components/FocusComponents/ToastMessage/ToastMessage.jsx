import React from 'react';
import Toast from '../../Toast/Toast';
import styles from './ToastMessage.module.css';

const ToastMessage = ({ type, msg }) => {
  return (
    <div className={styles.toastContainer}>
      <Toast toastType={type} toastMsg={msg} className={styles.toast} />
    </div>
  );
};

export default ToastMessage;
