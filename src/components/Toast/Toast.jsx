import styles from './Toast.module.css';

/*
    toast ui 를 추가합니다.

    toastType = 'success' or 'error'
    toastMsg = toast에 들어갈 메시지 (예: 집중이 중단되었습니다.)
    toastStyle = 'S' or 'L' (small or large)
*/

const Toast = ({
  toastType = 'success',
  toastMsg = '성공했습니다!',
  toastStyle = 'S',
}) => {
  const toastClassName =
    toastType === 'success' ? 'toastSuccess' : 'toastError';
  const toastSize = toastStyle.toUpperCase() === 'S' ? 'toastS' : 'toastL';
  return (
    <div
      className={`${styles.toast} ${styles[toastClassName]} ${styles[toastSize]}`}
    >
      {toastType === 'success' && <p>🎉 {toastMsg}</p>}
      {toastType === 'error' && <p>🚨 {toastMsg}</p>}
    </div>
  );
};

export default Toast;
