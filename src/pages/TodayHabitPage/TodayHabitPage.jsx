import React, { useEffect, useState } from 'react';
import styles from './TodayHabitPage.module.css';
import HabitList from '../../components/HabitComponents/HabitList';
import HabitListHeader from '../../components/HabitComponents/HabitListHeader';
import { useParams } from 'react-router-dom';
import HabitConfirmModal from '../../components/HabitComponents/HabitConfirmModal';
import CurrentTime from '../../components/CurrentTime/CurrentTime';
import HabitHeader from '../../components/HabitComponents/HabitHeader';
import {
  getStudyName,
  getTodayHabits,
  postHabit,
} from '../../services/HabitService';

const TodayHabitPage = () => {
  const [studyName, setStudyName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHabit, setNewHabit] = useState('');
  const [habits, setHabits] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id } = useParams();

  const fetchStudy = async () => {
    try {
      const title = await getStudyName(id);
      setStudyName(title);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHabits = async () => {
    try {
      const data = await getTodayHabits(id);
      setHabits(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudy();
    fetchHabits();
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

  const createHabit = async () => {
    if (!newHabit.trim() || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      await postHabit(id, newHabit);
      onCloseModalHandler();
      fetchHabits();
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
