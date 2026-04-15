import styles from './TodayFocus.module.css';
import { useEffect, useRef, useState } from 'react';
import FocusHeader from '../../components/FocusComponents/FocusHeader';
import TotalPoints from '../../components/FocusComponents/TotalPoints';
import TargetTime from '../../components/FocusComponents/TargetTime';
import Timer from '../../components/FocusComponents/Timer';
import { useParams } from 'react-router-dom';

const TodayFocus = () => {
  const [timer, setTimer] = useState(1500000);
  const [timerStatus, setTimerStatus] = useState('');
  const { id } = useParams();

  const timerRef = useRef();

  useEffect(() => {
    if (timerStatus === 'IN_PROGRESS') {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [timerStatus]);

  const timerStartHandler = () => {
    setTimerStatus('IN_PROGRESS');
  };

  return (
    <div className="wrapper">
      <div className={styles.focusWrapper}>
        <div>
          <FocusHeader />
          <TotalPoints studyId={id} />
        </div>
        <main className={styles.timerWrapper}>
          <TargetTime />
          <Timer
            timer={timer}
            timerStatus={timerStatus}
            onStartTimer={timerStartHandler}
          />
        </main>
      </div>
    </div>
  );
};

export default TodayFocus;
