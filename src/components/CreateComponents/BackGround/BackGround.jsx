import { useState } from 'react';
import styles from './BackGround.module.css';

import img1 from '../../../assets/images/img1.png.png';
import img2 from '../../../assets/images/img2.png.png';
import img3 from '../../../assets/images/img3.png.png';
import img4 from '../../../assets/images/img4.png.png';
import img5 from '../../../assets/images/img5.png.png';
import img6 from '../../../assets/images/img6.png.png';
import img7 from '../../../assets/images/img7.png.png';
import img8 from '../../../assets/images/img8.png.png';

const BackGround = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => {
    setSelectedImage(img);
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
