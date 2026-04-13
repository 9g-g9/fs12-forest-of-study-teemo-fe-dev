import React from 'react';
import styles from './Pagination.module.css';

// 현재 하드코딩으로 1부터 5까지 ui만 구현되어 있음
const Pagination = ({ currentPage = 1, pages = [1, 2, 3, 4, 5] }) => {
  return (
    <nav className={styles.pagination} aria-label="페이지네이션">
      <button type="button" className={styles.navButton} aria-label="첫 페이지">
        &lt;&lt;
      </button>
      <button type="button" className={styles.navButton} aria-label="이전 페이지">
        &lt;
      </button>

      <div className={styles.pageNumbers}>
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              className={`${styles.pageButton} ${isActive ? styles.active : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button type="button" className={styles.navButton} aria-label="다음 페이지">
        &gt;
      </button>
      <button type="button" className={styles.navButton} aria-label="마지막 페이지">
        &gt;&gt;
      </button>
    </nav>
  );
};

export default Pagination;
