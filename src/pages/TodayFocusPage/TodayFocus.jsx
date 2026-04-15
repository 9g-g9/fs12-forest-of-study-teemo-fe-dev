import styles from './TodayFocus.module.css';
import { useEffect, useRef, useState } from 'react';
import FocusHeader from '../../components/FocusComponents/FocusHeader';
import TotalPoints from '../../components/FocusComponents/TotalPoints';
import TargetDuration from '../../components/FocusComponents/TargetDuration/TargetDuration';
import Timer from '../../components/FocusComponents/Timer';
import { useParams } from 'react-router-dom';
import { upsertTimer } from '../../services/TimerService';

const TodayFocus = () => {
  const [targetDuration, setTargetDuration] = useState(1500000);
  const [timer, setTimer] = useState(targetDuration);
  const [timerStatus, setTimerStatus] = useState('CANCELED');
  const { id } = useParams();

  const timerRef = useRef();

  useEffect(() => {
    const fetchTimer = async () => {
      const getTimer = await upsertTimer(Number(id));

      setTargetDuration(getTimer.targetDuration);
    };

    fetchTimer();
  }, [id]);

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
          <FocusHeader studyId={id} />
          <TotalPoints studyId={id} />
        </div>
        <main className={styles.timerWrapper}>
          <div className={styles.timerHeader}>
            <h2>오늘의 집중</h2>
            <TargetDuration
              targetDuration={targetDuration}
              setTargetDuration={setTargetDuration}
              timerStatus={timerStatus}
            />
          </div>
          <Timer
            timer={timer}
            targetDuration={targetDuration}
            setTargetDuration={setTargetDuration}
            timerStatus={timerStatus}
            onStartTimer={timerStartHandler}
          />
        </main>
      </div>
    </div>
  );
};

export default TodayFocus;
