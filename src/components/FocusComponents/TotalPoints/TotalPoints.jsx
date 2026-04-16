import styles from './TotalPoints.module.css';
import TotalPoint from '../../TotalPoint/TotalPoint';

const TotalPoints = ({ studyId }) => {
  return (
    <div className={styles.pointContainer}>
      <p>현재까지 획득한 포인트</p>
      <TotalPoint id={studyId} size={'m'} />
    </div>
  );
};

export default TotalPoints;
