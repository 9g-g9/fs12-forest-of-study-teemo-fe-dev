import styles from '../../pages/TodayFocusPage/TodayFocus.module.css';
import icPlay from '../../assets/icons/ic_play.svg';
import icPause from '../../assets/icons/ic_pause.svg';
import icRestart from '../../assets/icons/ic_restart.svg';
import { formattedTime } from '../../utils/formattedTime';

const Timer = ({ timer, timerStatus, onStartTimer }) => {
  return (
    <div className={styles.timerContainer}>
      <h3 className={timerStatus === 'IN_PROGRESS' ? styles.inProgress : ''}>
        {formattedTime(timer)}
      </h3>
      <div className={styles.timerControlContainer}>
        {timerStatus === 'IN_PROGRESS' && (
          <button className={`${styles.pauseBtn} ${styles.ctrlBtn}`}>
            <img src={icPause} />
          </button>
        )}
        <button
          className={styles.startBtn}
          onClick={onStartTimer}
          disabled={timerStatus === 'IN_PROGRESS'}
        >
          <img src={icPlay} />
          Start!
        </button>
        {timerStatus === 'IN_PROGRESS' && (
          <button className={`${styles.restartBtn} ${styles.ctrlBtn}`}>
            <img src={icRestart} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
