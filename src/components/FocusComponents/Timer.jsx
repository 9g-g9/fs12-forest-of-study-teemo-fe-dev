import styles from '../../pages/TodayFocusPage/TodayFocus.module.css';
import icPlay from '../../assets/icons/ic_play.svg';
import icPause from '../../assets/icons/ic_pause.svg';
import icRestart from '../../assets/icons/ic_restart.svg';
import { formattedTime } from '../../utils/formattedTime';

const Timer = ({ timer, timerStatus, onStart, onPause, onReset }) => {
  return (
    <div className={styles.timerContainer}>
      <h3 className={timerStatus !== 'CANCELED' ? styles.inProgress : ''}>
        {formattedTime(timer)}
      </h3>
      <div className={styles.timerControlContainer}>
        {timerStatus !== 'CANCELED' && (
          <button
            className={`${styles.pauseBtn} ${styles.ctrlBtn}`}
            onClick={onPause}
            disabled={timerStatus === 'PAUSED'}
          >
            <img src={icPause} />
          </button>
        )}
        <button
          className={styles.startBtn}
          onClick={onStart}
          disabled={timerStatus === 'IN_PROGRESS'}
        >
          <img src={icPlay} />
          Start!
        </button>
        {timerStatus !== 'CANCELED' && (
          <button
            className={`${styles.restartBtn} ${styles.ctrlBtn}`}
            onClick={onReset}
          >
            <img src={icRestart} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
