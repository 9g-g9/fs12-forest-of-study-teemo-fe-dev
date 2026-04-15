import React, { useEffect, useState } from 'react';
import styles from './TodayHabitPage.module.css';
import LinkButton from '../../components/LinkButton/LinkButton';
import HabitList from '../../components/HabitComponents/HabitList';
import HabitListHeader from '../../components/HabitComponents/HabitListHeader';
import { useParams } from 'react-router-dom';
import HabitConfirmModal from '../../components/HabitComponents/HabitConfirmModal';

const TodayHabitPage = () => {
  const [studyName, setStudyName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHabit, setNewHabit] = useState('');
  const [habits, setHabits] = useState([]);

  const { id } = useParams();

  const fetchTodayHabits = async () => {
    try {
      const response = await fetch(`/api/habits/${id}/today`);
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
    setIsModalOpen(true);
  };

  const onCloseModalHandler = () => {
    setIsModalOpen(false);
    setNewHabit('');
  };

  const createHabit = async () => {
    if (!newHabit.trim()) return;

    try {
      const response = await fetch(`/api/habits/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newHabit }),
      });

      const result = await response.json();

      if (!result.success) return;

      setNewHabit('');
      onCloseModalHandler();
      fetchTodayHabits();
    } catch (error) {
      console.error(error);
    }
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
      {isModalOpen && (
        <HabitConfirmModal
          onClose={onCloseModalHandler}
          onConfirm={createHabit}
          newHabit={newHabit}
          setNewHabit={setNewHabit}
        />
      )}
    </>
  );
};

export default TodayHabitPage;
