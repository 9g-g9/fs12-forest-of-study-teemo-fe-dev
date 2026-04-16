import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Emoji from '../../../components/Emoji/Emoji';
import styles from './EmojiContainer.module.css';

import { getEmojis } from '../../../services/StudyDetailService';

import smileIcon from '../../../assets/icons/ic_smile.svg';
import plusIcon from '../../../assets/icons/ic_plus.svg';

const EmojiContainer = () => {
  const { id } = useParams();
  const [isMore, setIsMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState([]);
  const [moreEmojis, setMoreEmojis] = useState([]);

  const fetchEmojis = async () => {
    try {
      const data = await getEmojis(id);

      if (data.length <= 3) {
        setIsMore(false);
        setEmojis(data);
        return;
      }

      setIsMore(true);
      setEmojis(data.slice(0, 3));
      setMoreEmojis(data.slice(3));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchEmojis();
  }, []);

  return (
    <div className={styles.emojiWrapper}>
      {emojis.map((emoji, i) => (
        <Emoji
          key={`emoji-${i}`}
          type={'big'}
          emoji={emoji.emoji}
          count={emoji.count}
        />
      ))}
      {isMore && (
        <div>
          <button
            className={styles.emojiMoreBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={plusIcon} alt="이모지 더보기" /> {moreEmojis.length}..
          </button>
          {isOpen && (
            <div className={styles.emojiMoreBox}>
              {moreEmojis.map((emoji, i) => (
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
      )}
      <button className={styles.emojiAddBtn}>
        <img src={smileIcon} alt="이모지 추가 버튼" />
        <span>추가</span>
      </button>
    </div>
  );
};

export default EmojiContainer;
