import { useState } from 'react';
import styles from './BackGround.module.css';

import img1 from '../../../assets/images/background_green.png';
import img2 from '../../../assets/images/background_yellow.png';
import img3 from '../../../assets/images/background_blue.png';
import img4 from '../../../assets/images/background_pink.png';
import img5 from '../../../assets/images/img5.png';
import img6 from '../../../assets/images/img6.png';
import img7 from '../../../assets/images/img7.png';
import img8 from '../../../assets/images/img8.png';

const BackGround = ({ setBackground }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => {
    setSelectedImage(img);
    setBackground(img);
  };

  return (
    <div className={styles.grid}>
      {images.map((src, i) => (
        <div
          key={i}
          className={`${styles.card} ${selectedImage === src ? styles.active : ''}`}
          onClick={() => handleClick(src)}
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default BackGround;
