import React from 'react';
import styles from './Sort.module.css';
import toggleIcon from '../../../assets/icons/ic_toggle.svg';

const Sort = () => {
  return (
    <div className={styles.selectWrapper}>
      <select className={styles.select}>
        <option>최근 순</option>
        <option>오래된 순</option>
        <option>많은 포인트 순</option>
        <option>적은 포인트 순</option>
      </select>
      <img src={toggleIcon} alt="" className={styles.toggleIcon} />
    </div>
  );
};

export default Sort;
