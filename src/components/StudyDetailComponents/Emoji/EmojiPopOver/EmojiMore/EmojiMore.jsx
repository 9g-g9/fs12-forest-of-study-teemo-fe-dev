import { useState } from 'react';

import Emoji from '../../../../Emoji/Emoji';

import styles from '../../EmojiContainer.module.css';
import plusIcon from '../../../../../assets/icons/ic_plus.svg';

const EmojiMore = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={styles.emojiMoreBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={plusIcon} alt="이모지 더보기" /> {data.slice(3).length}..
      </button>
      {isOpen && (
        <div className={styles.emojiMoreBox}>
          {data.slice(3).map((emoji, i) => (
            <Emoji
              type={'big'}
              key={`emoji-${i}`}
              emoji={emoji.emoji}
              count={emoji.count}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiMore;
