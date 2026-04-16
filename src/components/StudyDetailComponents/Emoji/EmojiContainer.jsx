import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';

import Emoji from '../../../components/Emoji/Emoji';
import styles from './EmojiContainer.module.css';

import {
  getEmojis,
  createEmojis,
  updateEmojis,
} from '../../../services/StudyDetailService';

import smileIcon from '../../../assets/icons/ic_smile.svg';
import plusIcon from '../../../assets/icons/ic_plus.svg';

const EmojiContainer = () => {
  const { id } = useParams();
  const [isMore, setIsMore] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [emojis, setEmojis] = useState([]);

  const fetchEmojis = async () => {
    try {
      const data = await getEmojis(id);

      setEmojis(data);

      if (data.length <= 3) {
        setIsMore(false);
        return;
      }

      setIsMore(true);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const emojiHandle = async (e) => {
    // emoji 가 현재 emoji 안에 있는 지 확인
    // 있으면 patch 로 넘기고
    // 없으면 create 로 넘기자!

    const selectEmoji = emojis.find((emoji) => emoji.emoji === e.emoji);

    if (!selectEmoji) {
      //create
      const newEmoji = await createEmojis(id, e.emoji);

      setEmojis((prev) => [...prev, newEmoji]);
    } else {
      //update emoji id 같이
      const updateEmoji = await updateEmojis(id, selectEmoji.id);

      setEmojis((prev) =>
        prev.map((p) => (p.emoji !== updateEmoji.emoji ? p : updateEmoji)),
      );
    }
  };

  useEffect(() => {
    fetchEmojis();
  }, []);

  return (
    <div className={styles.emojiWrapper}>
      {emojis.slice(0, 3).map((emoji, i) => (
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
            onClick={() => setIsMoreOpen(!isMoreOpen)}
          >
            <img src={plusIcon} alt="이모지 더보기" /> {emojis.slice(3).length}
            ..
          </button>
          {isMoreOpen && (
            <div className={styles.emojiMoreBox}>
              {emojis.slice(3).map((emoji, i) => (
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

      <div className={styles.emojiPickerWrapper}>
        <button
          className={styles.emojiAddBtn}
          onClick={() => setIsPickerOpen(!isPickerOpen)}
        >
          <img src={smileIcon} alt="이모지 추가 버튼" />
          <span>추가</span>
        </button>
        {isPickerOpen && (
          <div className={styles.emojiPickerBox}>
            <EmojiPicker onEmojiClick={(e) => emojiHandle(e)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmojiContainer;
