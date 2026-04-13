import styles from '../../pages/TodayFocusPage/TodayFocus.module.css';
import icLeaf from '../../assets/icons/ic_leaf.svg';

const TotalPoints = () => {
  return (
    <div className={styles.pointContainer}>
      <p>현재까지 획득한 포인트</p>
      <div className={styles.point}>
        <img src={icLeaf} />
        <p>310p 획득</p>
      </div>
    </div>
  );
};

export default TotalPoints;
