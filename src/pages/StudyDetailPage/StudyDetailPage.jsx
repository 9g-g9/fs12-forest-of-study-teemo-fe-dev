import LinkButton from '../../components/LinkButton/LinkButton';
import HabitTable from '../../components/StudyDetailComponents/HabitTable/HabitTable';
import Emojis from '../../components/StudyDetailComponents/Emoji/EmojiContainer';
import Interaction from '../../components/StudyDetailComponents/Interaction/Interaction';
import Description from '../../components/StudyDetailComponents/Description/Description';

import styles from './StudyDetailPage.module.css';

const StudyDetailPage = () => {
  return (
    <div className="wrapper">
      <div className={styles.ixWrapper}>
        <Emojis />
        <Interaction />
      </div>

      <div className={styles.introWrapper}>
        <div className={styles.titleContainer}>
          <h1>연우의 개발공장</h1>
          <div className={styles.btnContainer}>
            <LinkButton text="오늘의 습관" url="/:id/habit" />
            <LinkButton text="오늘의 집중" url="/:id/focus" />
          </div>
        </div>

        <div className={styles.descWrapper}>
          <Description
            descTitle={'소개'}
            descContent={
              'Slow And Steady Wins The Race! 다들 오늘 하루도 화이팅 :)'
            }
          />
          <Description
            descType={'point'}
            descTitle={'현재까지 획득한 포인트'}
          />
        </div>
      </div>

      <main className={styles.innerWrapper}>
        <h2 className={styles.tableTitle}>습관 기록표</h2>

        <HabitTable />
      </main>
    </div>
  );
};

export default StudyDetailPage;
