import LinkButton from '../../components/LinkButton/LinkButton';

import styles from './StudyDetailPage.module.css';
import stickerEmpty from '../../assets/icons/ic_sticker_empty.svg';
import smileIcon from '../../assets/icons/ic_smile.svg';
import pointIcon from '../../assets/icons/ic_point.svg';

const StudyDetailPage = () => {
  const datas = [
    {
      title: '미라클모닝 6시 기상',
      isCompleted: [true, true, false, true, false, false, false],
    },
    {
      title: '미라클모닝 6시 기상',
      isCompleted: [true, true, false, true, false, false, true],
    },
    {
      title: '미라클모닝 6시 기상',
      isCompleted: [false, true, false, true, false, true, false],
    },
    {
      title: '미라클모닝 6시 기상',
      isCompleted: [true, true, false, false, true, false, false],
    },
    {
      title: '미라클모닝 6시 기상',
      isCompleted: [false, true, false, true, false, false, true],
    },
  ];

  const emojis = [
    {
      emoji: '🙂‍↕️',
      count: 33,
    },
    {
      emoji: '😁',
      count: 33,
    },
    {
      emoji: '🤣',
      count: 33,
    },
  ];

  return (
    <div className="wrapper">
      <div className={styles.flexBtwWrapper}>
        <div className={styles.emojiWrapper}>
          <ul className={styles.emojiContainer}>
            {emojis.map((emoji, i) => (
              <li key={`emoji-${i}`} className={styles.emojiCount}>
                <span>{emoji.emoji}</span>
                <span>{emoji.count}</span>
              </li>
            ))}
          </ul>
          <button className={styles.emojiAddBtn}>
            <img src={smileIcon} alt="이모지 추가 버튼" />
            <span>추가</span>
          </button>
        </div>

        <ul className={styles.interContainer}>
          <li className={styles.greenText}>공유하기</li>
          <li className={styles.greenText}>|</li>
          <li className={styles.greenText}>수정하기</li>
          <li className={styles.grayText}>|</li>
          <li className={styles.grayText}>스터디 삭제하기</li>
        </ul>
      </div>

      <div className={styles.introWrapper}>
        <div className={`${styles.flexBtwWrapper} ${styles.titleContainer}`}>
          <h1>연우의 개발공장</h1>
          <div className={styles.btnContainer}>
            <LinkButton text="오늘의 습관" url="/:id/habit" />
            <LinkButton text="오늘의 집중" url="/:id/focus" />
          </div>
        </div>

        <div className={styles.descWrapper}>
          <div className={styles.descContainer}>
            <p className={styles.descTitle}>소개</p>
            <p className={styles.descContent}>소갯말</p>
          </div>

          <div className={styles.descContainer}>
            <p className={styles.descTitle}>현재까지 획득한 포인트</p>
            <p className={styles.pointLog}>
              <img src={pointIcon} alt="포인트 아이콘" />
              310P 획득
            </p>
          </div>
        </div>
      </div>

      <div className={styles.innerWrapper}>
        <h2>습관 기록표</h2>

        <table className={styles.habitTable}>
          <thead>
            <tr>
              <th></th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
              <th>일</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, d_i) => {
              return (
                <tr key={`habit-${d_i}`}>
                  <th>{data.title}</th>
                  {data.isCompleted.map((complete, c_i) => (
                    <td key={`complete-${c_i}`}>
                      {complete ? (
                        <img src={sticker1} alt="완료" />
                      ) : (
                        <img src={stickerEmpty} alt="완료 못함" />
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyDetailPage;
