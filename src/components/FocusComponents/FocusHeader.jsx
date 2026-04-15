import styles from '../../pages/TodayFocusPage/TodayFocus.module.css';
import LinkButton from '../../components/LinkButton/LinkButton';

const FocusHeader = ({ studyId }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>연우의 개발공장</h1>
      <nav className={styles.navContainer}>
        <LinkButton text="오늘의 습관" url={`/${studyId}/habit`} />
        <LinkButton text="로그" url={`/${studyId}/logs`} />
        <LinkButton text="홈" url={`/${studyId}/detail`} />
      </nav>
    </header>
  );
};

export default FocusHeader;
