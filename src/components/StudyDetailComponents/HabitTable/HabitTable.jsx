import HabitItems from './HabitItems/HabitItems';
import styles from '../HabitTable/HabitTable.module.css';
import { useEffect, useState } from 'react';
import { getWeeklyHabits } from '../../../services/StudyDetailService';

const HabitTable = ({ id }) => {
  const [habits, setHabits] = useState([]);

  const fetchData = async () => {
    const data = await getWeeklyHabits(id);

    setHabits(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const datas = [
  //   {
  //     title: '미라클모닝 6시 기상',
  //     isCompleted: [true, true, false, true, false, false, false],
  //   },
  //   {
  //     title: '아침 챙겨 먹기',
  //     isCompleted: [true, true, false, true, false, false, true],
  //   },
  //   {
  //     title: 'React 스터디 책 1챕터 읽기',
  //     isCompleted: [false, true, false, true, false, true, false],
  //   },
  //   {
  //     title: '스트레칭',
  //     isCompleted: [true, true, false, false, true, false, false],
  //   },
  //   {
  //     title: '사이드 프로젝트',
  //     isCompleted: [false, true, false, true, false, false, true],
  //   },
  //   {
  //     title: '물 2L 마시기',
  //     isCompleted: [false, true, false, true, false, false, true],
  //   },
  // ];

  return (
    <>
      {habits.length === 0 ? (
        <p className={styles.emptyTable}>
          아직 습관이 없어요
          <br />
          오늘의 습관에서 습관을 생성해보세요
        </p>
      ) : (
        <table className={styles.habitTable}>
          <thead>
            <tr>
              <th></th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
              <th>일</th>
            </tr>
          </thead>
          <tbody>
            <HabitItems datas={habits} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default HabitTable;
