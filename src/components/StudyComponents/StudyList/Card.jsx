import styles from './Card.module.css';
import TotalPoint from '../../TotalPoint/TotalPoint';
import {
  getStudyBackgroundColor,
  getStudyBackgroundImage,
  isImageBackground,
} from './studyBackground';

const Card = ({ study }) => {
  // 카드 배경
  const background = study.background;
  const hasImageBackground = isImageBackground(background);

  //단일색일 경우 색상값 / 이미지일 경우 경로
  const cardStyle = hasImageBackground
    ? { backgroundImage: `url(${getStudyBackgroundImage(background)})` }
    : { backgroundColor: getStudyBackgroundColor(background) };

  //css 모듈 클래스 명(오버레이)
  const backgroundClassName = hasImageBackground
    ? styles.imageBackground
    : styles.solidBackground;

  const cardClassName = `${styles.cardBackground} ${backgroundClassName}`;

  return (
    <article className={cardClassName} style={cardStyle}>
      <div className={styles.cardInner}>
        {/* 카드 타이틀 + 포인트 */}
        <div className={styles.titleDate}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>
              {study.nickname} 의 {study.title}
            </h3>
            {/* 획득 포인트 연결 */}
            <TotalPoint id={study.id} theme="dark" />
          </div>

          <p className={styles.cardProgressText}>{study.progressText}</p>
        </div>

        <p className={styles.cardDescription}>{study.description}</p>

        {/* 이모지 */}
        <div className={styles.cardEmojiTagDiv}>
          <span className={styles.cardEmojiTag}> 💬 {study.commentCount}</span>
          <span className={styles.cardEmojiTag}> 🔥 {study.fireCount}</span>
          <span className={styles.cardEmojiTag}> 🤍 {study.heartCount}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
