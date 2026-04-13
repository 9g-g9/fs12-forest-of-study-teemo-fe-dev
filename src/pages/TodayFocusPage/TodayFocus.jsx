import icPoint from '../../assets/icons/ic_point.svg';
import icPlay from '../../assets/icons/ic_play.svg';
import icPause from '../../assets/icons/ic_pause.svg';
import icRestart from '../../assets/icons/ic_restart.svg';
import icTimer from '../../assets/icons/ic_timer.svg';
import styles from './TodayFocus.module.css';
import LinkButton from '../../components/LinkButton/LinkButton';

const TodayFocus = () => {
  return (
    <div className="wrapper">
      <div className={styles.focusWrapper}>
        <div>
          <header className={styles.header}>
            <h1 className={styles.title}>연우의 개발공장</h1>
            <nav className={styles.navContainer}>
              <LinkButton text="오늘의 습관" url="/:id/habit" />
              <LinkButton text="로그" url="/:id/logs" />
              <LinkButton text="홈" url="/:id/detail" />
            </nav>
          </header>
          <div className={styles.pointContainer}>
            <p>현재까지 획득한 포인트</p>
            <div className={styles.point}>
              <img src={icPoint} />
              <p>310p 획득</p>
            </div>
          </div>
        </div>
        <main className={styles.timerWrapper}>
          <div className={styles.timerHeader}>
            <h2>오늘의 집중</h2>
            <button className={styles.targetBtn}>
              <img src={icTimer} />
              <p>25:00</p>
            </button>
          </div>
          <div className={styles.timerContainer}>
            <h3>25:00</h3>
            <div className={styles.timerControlContainer}>
              <button className={`${styles.pauseBtn} ${styles.ctrlBtn}`}>
                <img src={icPause} />
              </button>
              <button className={styles.startBtn}>
                <img src={icPlay} />
                Start!
              </button>
              <button className={`${styles.restartBtn} ${styles.ctrlBtn}`}>
                <img src={icRestart} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TodayFocus;
