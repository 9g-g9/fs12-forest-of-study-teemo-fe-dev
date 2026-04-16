import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Emoji from '../../../components/Emoji/Emoji';
import styles from './EmojiContainer.module.css';

import { getEmojis } from '../../../services/StudyDetailService';
import EmojiAdd from './EmojiPopOver/EmojiAdd/EmojiAdd';
import EmojiMore from './EmojiPopOver/EmojiMore/EmojiMore';

const EmojiContainer = () => {
  const { id } = useParams();
  const [isMore, setIsMore] = useState(false);
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

      {isMore && <EmojiMore data={emojis} />}

      <EmojiAdd emojis={emojis} setEmojis={setEmojis} id={id} />
    </div>
  );
};

export default EmojiContainer;
