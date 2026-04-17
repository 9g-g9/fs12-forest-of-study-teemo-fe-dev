import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Emoji from '../../../components/Emoji/Emoji';
import styles from './EmojiContainer.module.css';

import { getEmojis } from '../../../services/StudyDetailService';
import EmojiAdd from './EmojiPopOver/EmojiAdd/EmojiAdd';
import EmojiMore from './EmojiPopOver/EmojiMore/EmojiMore';

const EmojiContainer = () => {
  const { id } = useParams();
  const [emojis, setEmojis] = useState([]);

  const fetchEmojis = async () => {
    try {
      const data = await getEmojis(id);

      setEmojis(data);
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

      {emojis.length > 3 && <EmojiMore data={emojis} />}

      <EmojiAdd emojis={emojis} setEmojis={setEmojis} id={id} />
    </div>
  );
};

export default EmojiContainer;
