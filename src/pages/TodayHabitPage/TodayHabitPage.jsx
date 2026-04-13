import React from 'react';
import styles from './TodayHabitPage.module.css';
import LinkButton from '../../components/LinkButton/LinkButton';

const TodayHabitPage = () => {
  const mockHabits = [
    { id: 1, name: '1번 습관', isCompleted: true },
    { id: 2, name: '2번 습관', isCompleted: false },
  ];

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
              <div className={styles.listHeader}>
                <h2 className={styles.listTitle}>오늘의 습관</h2>
                <button className={styles.listConfirm}>목록 수정</button>
              </div>
              <div className={styles.habitList}>
                {mockHabits.length === 0 ? (
                  <div className={styles.emptyMessage}>
                    <p>아직 습관이 없어요</p>
                    <p>목록 수정을 눌러 습관을 생성해보세요</p>
                  </div>
                ) : (
                  mockHabits.map((h) => (
                    <div
                      key={h.id}
                      className={`${styles.habitItem} ${h.isCompleted ? styles.completed : styles.notComplete}`}
                    >
                      {h.name}
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TodayHabitPage;
