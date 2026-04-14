import Card from '../../components/StudyComponents/StudyList/Card';
import Pagination from '../../components/StudyComponents/StudyList/Pagination';
import Search from '../../components/StudyComponents/StudyList/Search';
import Sort from '../../components/StudyComponents/StudyList/Sort';
import styles from './StudyListPage.module.css';

const recentStudyList = [
  {
    id: 1,
    title: 'UX 스터디',
    progressText: '62일째 진행 중',
    description: 'Slow And Steady Wins The Race!',
    nickname: '이유디',
    rewardPoint: 310,
    commentCount: 37,
    fireCount: 26,
    heartCount: 14,
  },
  {
    id: 2,
    title: 'UX 스터디',
    progressText: '62일째 진행 중',
    description: '나비보벳따우',
    nickname: 'K.K',
    rewardPoint: 310,
    commentCount: 37,
    fireCount: 26,
    heartCount: 14,
  },
  {
    id: 3,
    title: '개발공장',
    progressText: '10일째 진행 중',
    description: '오늘 하루도 화이팅 :) 다들 꾸준히 달려봐요.',
    nickname: '연우',
    rewardPoint: 50,
    commentCount: 12,
    fireCount: 11,
    heartCount: 9,
  },
];

const studyList = [
  ...recentStudyList,
  {
    id: 4,
    title: '프론트엔드 챌린지',
    progressText: '18일째 진행 중',
    description: '매일 한 문제씩 풀면서 감을 잃지 않기.',
    nickname: '민서',
    rewardPoint: 180,
    commentCount: 21,
    fireCount: 17,
    heartCount: 8,
  },
  {
    id: 5,
    title: '디자인 시스템',
    progressText: '31일째 진행 중',
    description: '컴포넌트 단위로 차근차근 쌓아가는 중이에요.',
    nickname: '지우',
    rewardPoint: 220,
    commentCount: 16,
    fireCount: 14,
    heartCount: 10,
  },
  {
    id: 6,
    title: '알고리즘 루틴',
    progressText: '7일째 진행 중',
    description: '오늘도 한 걸음씩. 꾸준함으로 이겨봅시다.',
    nickname: '도윤',
    rewardPoint: 90,
    commentCount: 9,
    fireCount: 7,
    heartCount: 6,
  },
];

const StudyList = () => {
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
              recentStudyList.map((study) => {
                return <Card key={study.id} study={study} />;
              })
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
              studyList.map((study) => {
                return <Card key={study.id} study={study} />;
              })
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

export { recentStudyList };

export default StudyList;
