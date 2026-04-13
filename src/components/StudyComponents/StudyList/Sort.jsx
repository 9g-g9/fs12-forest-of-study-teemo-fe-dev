import React from 'react';
import styles from './Sort.module.css';

const Sort = () => {
  return (
    <div>
      <select className={styles.select}>
        <option>최근 순</option>
        <option>오래된 순</option>
        <option>많은 포인트 순</option>
        <option>적은 포인트 순</option>
      </select>
    </div>
  );
};

export default Sort;
