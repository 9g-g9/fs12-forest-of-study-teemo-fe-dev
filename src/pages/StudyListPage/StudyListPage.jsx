import { useEffect, useState } from 'react';
import Card from '../../components/StudyComponents/StudyList/Card';
import Pagination from '../../components/StudyComponents/StudyList/Pagination';
import Search from '../../components/StudyComponents/StudyList/Search';
import Sort from '../../components/StudyComponents/StudyList/Sort';
import {
  getRecentStudyList,
  getStudyList,
} from '../../services/StudyService';
import styles from './StudyListPage.module.css';

const StudyList = () => {
  const [studyList, setStudyList] = useState([]);
  const [recentStudyList, setRecentStudyList] = useState([]);

  useEffect(() => {
    const fetchStudyList = async () => {
      try {
        const data = await getStudyList();
        setStudyList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudyList();
    setRecentStudyList(getRecentStudyList());
  }, []);

  return (
    <main className={styles.page}>
      <div className="wrapper">
        {/* 최근 조회한 스터디 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>최근 조회한 스터디</h2>
          <div className={styles.recentGrid}>
            {recentStudyList.length === 0 ? (
              <h2>아직 조회한 스터디가 없어요</h2>
            ) : (
              recentStudyList.map((study) => <Card key={study.id} study={study} />)
            )}
          </div>
        </section>
      </div>

      <div className="wrapper">
        {/* 스터디 둘러보기 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>스터디 둘러보기</h2>
          </div>

          <div className={styles.controlsRow}>
            {/* 검색 */}
            <Search />
            {/* 정렬 */}
            <Sort />
          </div>

          <div className={styles.cardGrid}>
            {studyList.length === 0 ? (
              <h2> 아직 둘러 볼 스터디가 없어요</h2>
            ) : (
              studyList.map((study) => <Card key={study.id} study={study} />)
            )}
          </div>

          {/* 페이지네이션 */}
          <div className={styles.paginationWrapper}>
            <Pagination currentPage={1} pages={[1, 2, 3, 4, 5]} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default StudyList;
