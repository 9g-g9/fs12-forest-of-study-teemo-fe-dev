import styles from '../../pages/TodayFocusPage/TodayFocus.module.css';
import TotalPoint from '../TotalPoint/TotalPoint';

const TotalPoints = () => {
  return (
    <div className={styles.pointContainer}>
      <p>현재까지 획득한 포인트</p>
      <TotalPoint size={'m'} />
    </div>
  );
};

export default TotalPoints;
