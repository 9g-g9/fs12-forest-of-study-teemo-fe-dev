import styles from '../../pages/TodayFocusPage/TodayFocus.module.css';
import LinkButton from '../../components/LinkButton/LinkButton';

const FocusHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>연우의 개발공장</h1>
      <nav className={styles.navContainer}>
        <LinkButton text="오늘의 습관" url="/:id/habit" />
        <LinkButton text="로그" url="/:id/logs" />
        <LinkButton text="홈" url="/:id/detail" />
      </nav>
    </header>
  );
};

export default FocusHeader;
