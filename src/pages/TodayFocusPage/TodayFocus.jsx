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
  updatePause,
  updateReset,
  updateStart,
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
  const [title, setTitle] = useState('');

  const timerRef = useRef();

  useEffect(() => {
    const fetchTimer = async () => {
      const data = await getTimer(id);
      if (!data.timer) {
        setTargetDuration(1500000);
        setTimerCount(1500000);
        await createTimer(id);
        return;
      }

      setTitle(data.title);
      setTargetDuration(data.timer.targetDuration);
      setTimerStatus(data.timer.status);
      setTimerCount(data.timer.targetDuration - data.timer.elapsedTime + 700);
    };

    fetchTimer();
  }, [id]);

  useEffect(() => {
    if (timerStatus === 'IN_PROGRESS') {
      timerRef.current = setInterval(() => {
        setTimerCount((prev) => prev - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [id, timerStatus]);

  // 폼 토글 핸들러 (클릭 시 수정 폼으로 변환)
  const toggleFormHandler = () => {
    if (timerStatus === 'CANCELED') {
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

    setTargetDuration(formattedMs);
    setTimerCount(formattedMs);
    setToggleForm('DEFAULT');
    setError('');
    await updateTargetDuration(id, formattedMs);
  };

  /*-----------------------------------------------------
          타이머 조작 핸들러(시작, 일시정지, 리셋)
  ------------------------------------------------------*/
  const timerStartHandler = async () => {
    setTimerStatus('IN_PROGRESS');
    await updateStart(id);
  };

  const timerPauseHandler = async () => {
    clearInterval(timerRef.current);
    setTimerStatus('PAUSED');
    await updatePause(id);
  };

  const timerResetHandler = async () => {
    clearInterval(timerRef.current);
    setTimerStatus('CANCELED');
    setTimerCount(targetDuration);
    await updateReset(id);
  };

  return (
    <div className="wrapper">
      <div className={styles.focusWrapper}>
        <div>
          <FocusHeader studyId={id} title={title} />
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
            onStart={timerStartHandler}
            onPause={timerPauseHandler}
            onReset={timerResetHandler}
          />
        </main>
      </div>
    </div>
  );
};

export default TodayFocus;
