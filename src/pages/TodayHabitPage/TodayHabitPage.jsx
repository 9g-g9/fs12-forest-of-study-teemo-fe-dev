import React, { useEffect, useState } from 'react';
import styles from './TodayHabitPage.module.css';
import LinkButton from '../../components/LinkButton/LinkButton';
import HabitList from '../../components/HabitComponents/HabitList';
import HabitListHeader from '../../components/HabitComponents/HabitListHeader';
import { useParams } from 'react-router-dom';

const TodayHabitPage = () => {
  const [habits, setHabits] = useState([]);
  const [studyName, setStudyName] = useState('');

  const { id } = useParams();

  const fetchTodayHabits = async () => {
    try {
      const response = await fetch(`/api/studies/${id}/habits/today`);
      const result = await response.json();

      console.log(result);
      setHabits(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodayHabits();
  }, []);

  const onOpenModalHandler = () => {
    console.log('모달 열기');
  };

  return (
    <>
      <div className="wrapper">
        <div className={styles.bodyWrapper}>
          <section className={styles.header}>
            <div className={styles.top}>
              <h1 className={styles.title}>스터디명</h1>
              <nav className={styles.navContainer}>
                <LinkButton text="오늘의 집중" url="/:id/focus" />
                <LinkButton text="로그" url="/:id/logs" />
                <LinkButton text="홈" url="/:id/detail" />
              </nav>
            </div>
            <div className={styles.time}>
              <p className={styles.timeTxt}>현재 시간</p>
              <div className={styles.nowTime}>시계</div>
            </div>
          </section>
          <section className={styles.mainSection}>
            <div className={styles.todayHabit}>
              <HabitListHeader onOpenModal={onOpenModalHandler} />
              <HabitList habits={habits} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TodayHabitPage;
