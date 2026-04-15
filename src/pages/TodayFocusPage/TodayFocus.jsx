import styles from './TodayFocus.module.css';
import { useEffect, useRef, useState } from 'react';
import FocusHeader from '../../components/FocusComponents/FocusHeader';
import TotalPoints from '../../components/FocusComponents/TotalPoints';
import TargetDuration from '../../components/FocusComponents/TargetDuration/TargetDuration';
import Timer from '../../components/FocusComponents/Timer';
import { useParams } from 'react-router-dom';
import {
  createTimer,
  getTimer,
  updateTargetDuration,
} from '../../services/TimerService';

const TodayFocus = () => {
  const { id } = useParams();
  const [targetDuration, setTargetDuration] = useState(0);
  const [timerCount, setTimerCount] = useState(targetDuration);
  const [timerStatus, setTimerStatus] = useState('CANCELED');
  const h = Math.floor((targetDuration / (1000 * 60 * 60)) % 24);
  const m = Math.floor((targetDuration / (1000 * 60)) % 60);
  const s = Math.floor((targetDuration / 1000) % 60);
  const [toggleForm, setToggleForm] = useState('DEFAULT');
  const [hours, setHours] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const [seconds, setSeconds] = useState(s);
  const [error, setError] = useState('');

  const timerRef = useRef();

  useEffect(() => {
    const fetchTimer = async () => {
      const timer = await getTimer(Number(id));
      if (!timer) {
        const newTimer = await createTimer(Number(id));
        setTargetDuration(newTimer.targetDuration);
        return;
      }

      setTargetDuration(timer.targetDuration);
      if (timer.status === 'CANCELED') {
        setTimerCount(targetDuration);
      }
    };
    fetchTimer();
  }, [id, targetDuration]);

  useEffect(() => {
    if (timerStatus === 'IN_PROGRESS') {
      timerRef.current = setInterval(() => {
        setTimerCount((prev) => prev - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [timerStatus]);

  const timerStartHandler = () => {
    setTimerStatus('IN_PROGRESS');
  };

  // 폼 토글 핸들러 (클릭 시 수정 폼으로 변환)
  const toggleFormHandler = () => {
    if (timerStatus !== 'IN_PROGRESS') {
      if (toggleForm === 'DEFAULT') {
        setHours(h);
        setMinutes(m);
        setSeconds(s);
        setToggleForm('FORM');
      } else {
        setToggleForm('DEFAULT');
      }
    }
  };

  /*---------------------------
            input 핸들러
      -------------------------*/
  const hoursInputHandler = (e) => {
    const newHours = e.target.value;
    if (isNaN(newHours)) {
      setError('숫자를 입력해주세요');
    } else if (newHours >= 24) {
      setError('23시 이하로 입력해주세요');
    } else {
      setHours(newHours);
      setError('');
    }
  };

  const minutesInputHandler = (e) => {
    const newMinutes = e.target.value;
    if (isNaN(newMinutes)) {
      setError('숫자를 입력해주세요');
    } else if (newMinutes >= 60) {
      setError('59분 이하로 입력해주세요');
    } else {
      setMinutes(newMinutes);
      setError('');
    }
  };

  const secondsInputHandler = (e) => {
    const newSeconds = e.target.value;
    if (isNaN(newSeconds)) {
      setError('숫자를 입력해주세요');
    } else if (newSeconds >= 60) {
      setError('59초 이하로 입력해주세요');
    } else {
      setSeconds(newSeconds);
      setError('');
    }
  };

  // 목표 시간 설정 핸들러
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!hours) {
      setHours(0);
    }
    if (!minutes) {
      setMinutes(0);
    }
    if (!seconds) {
      setSeconds(0);
    }

    const formattedMs =
      Number(hours) * 1000 * 60 * 60 +
      Number(minutes) * 1000 * 60 +
      Number(seconds) * 1000;

    if (formattedMs < 600000) {
      setError('10분 이상으로 입력해주세요');
      return;
    }

    await updateTargetDuration(id, formattedMs);
    setTargetDuration(formattedMs);
    setToggleForm('DEFAULT');
    setError('');
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
              toggleForm={toggleForm}
              error={error}
              setError={setError}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              onToggleForm={toggleFormHandler}
              onChangeHours={hoursInputHandler}
              onChangeMinutes={minutesInputHandler}
              onChangeSeconds={secondsInputHandler}
              onSubmitTarget={submitHandler}
            />
          </div>
          <Timer
            timer={timerCount}
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
