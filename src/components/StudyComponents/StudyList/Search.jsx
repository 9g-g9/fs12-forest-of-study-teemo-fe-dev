import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div>
      <input className={styles.input} placeholder="검색" />
    </div>
  );
};

export default Search;
