import React from 'react';
import styles from './Introduce.module.css';
import { useState } from 'react';

const Introduce = () => {
  const [introduce, setIntroduce] = useState('');

  return (
    <div className={styles.introduceContainer}>
      <textarea
        className={styles.inputIntroduce}
        placeholder="소개 멘트를 작성해 주세요"
        value={introduce}
        onChange={(e) => setIntroduce(e.target.value)}
        maxLength={200}
      />
    </div>
  );
};

export default Introduce;
