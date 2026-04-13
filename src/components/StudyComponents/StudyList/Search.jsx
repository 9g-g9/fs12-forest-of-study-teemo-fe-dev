import React from 'react';
import styles from './Search.module.css';
import searchIcon from '../../../assets/icons/ic_search.svg';

const Search = () => {
  return (
    <div className={styles.searchField}>
      <img src={searchIcon} alt="" className={styles.searchIcon} />
      <input className={styles.input} placeholder="검색" />
    </div>
  );
};

export default Search;
