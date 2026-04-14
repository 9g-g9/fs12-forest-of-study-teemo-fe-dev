import Emoji from '../../../components/Emoji/Emoji';
import styles from './EmojiContainer.module.css';

import smileIcon from '../../../assets/icons/ic_smile.svg';

const EmojiContainer = () => {
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
    <div className={styles.emojiWrapper}>
      {emojis.map((emoji, i) => (
        <Emoji emoji={emoji.emoji} count={emoji.count} />
      ))}
      <button className={styles.emojiAddBtn}>
        <img src={smileIcon} alt="이모지 추가 버튼" />
        <span>추가</span>
      </button>
    </div>
  );
};

export default EmojiContainer;
