import styles from '../../pages/TodayFocusPage/TodayFocus.module.css';
import icTimer from '../../assets/icons/ic_timer.svg';

const TargetTime = () => {
  return (
    <div className={styles.timerHeader}>
      <h2>오늘의 집중</h2>
      <button className={styles.targetBtn}>
        <img src={icTimer} />
        <p>25:00</p>
      </button>
    </div>
  );
};

export default TargetTime;
