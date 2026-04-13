import React from 'react';
import Card from '../../components/StudyComponents/StudyList/Card';
import styles from './StudyListPage.module.css';

const RecentListPage = ({ recentStudyList }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>최근 조회한 스터디</h2>
      <div className={styles.recentGrid}>
        {recentStudyList.map((study) => {
          return <Card key={study.id} study={study} />;
        })}
      </div>
    </section>
  );
};

export default RecentListPage;
