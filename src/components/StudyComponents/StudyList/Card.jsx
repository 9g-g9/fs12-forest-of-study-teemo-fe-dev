import styles from './Card.module.css';

const Card = ({ study }) => {
  return (
    <article className={styles.cardBackground}>
      <div className={styles.cardInner}>
        {/* 카드 타이틀 + 포인트 */}
        <div className={styles.titleDate}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>
              {study.nickname}의{study.title}
            </h3>
            <p className={styles.cardPoint}>{study.rewardPoint}P 획득</p>
          </div>

          <p className={styles.cardProgressText}>{study.progressText}</p>
        </div>
        <p className={styles.cardDescription}>{study.description}</p>

        {/* 이모지 */}
        <div className={styles.cardEmojiTagDiv}>
          <span className={styles.cardEmojiTag}>💬 {study.commentCount}</span>
          <span className={styles.cardEmojiTag}> 🔥 {study.fireCount}</span>
          <span className={styles.cardEmojiTag}> 🤍 {study.heartCount}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
