import React, { useEffect, useState } from 'react';
import styles from './TodayHabitPage.module.css';
import HabitList from '../../components/HabitComponents/HabitList';
import HabitListHeader from '../../components/HabitComponents/HabitListHeader';
import { useParams } from 'react-router-dom';
import HabitConfirmModal from '../../components/HabitComponents/HabitConfirmModal';
import CurrentTime from '../../components/CurrentTime/CurrentTime';
import HabitHeader from '../../components/HabitComponents/HabitHeader';

const TodayHabitPage = () => {
  const [studyName, setStudyName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHabit, setNewHabit] = useState('');
  const [habits, setHabits] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id } = useParams();

  // 스터디명 조회
  const fetchStudy = async () => {
    try {
      const response = await fetch('/api/studies');
      const result = await response.json();

      if (!result.success) return;

      const currentStudy = result.data.find((study) => study.id === Number(id));

      if (!currentStudy) return;

      setStudyName(currentStudy.title);
    } catch (error) {
      console.error(error);
    }
  };

  // 습관 조회
  const fetchTodayHabits = async () => {
    try {
      const response = await fetch(`/api/habits/${id}/today`);
      const result = await response.json();

      setHabits(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodayHabits();
    fetchStudy();
  }, [id]);

  // 모달 열기
  const onOpenModalHandler = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const onCloseModalHandler = () => {
    setIsModalOpen(false);
    setNewHabit('');
  };

  // 습관 생성
  const createHabit = async () => {
    if (!newHabit.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);

      const response = await fetch(`/api/habits/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newHabit }),
      });

      const result = await response.json();

      if (!result.success) return;

      onCloseModalHandler();
      fetchTodayHabits();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className={styles.bodyWrapper}>
          <section className={styles.header}>
            <HabitHeader studyName={studyName} id={id} />
            <CurrentTime />
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
