import { Link } from 'react-router-dom';
import icArrowRight from '../../assets/icons/ic_arrow_right.svg';
import styles from './LinkButton.module.css';

/* ----------------------------------
            링크 버튼 컴포넌트
  -----------------------------------

  text = LinkButton 내부에 들어갈 text
  url = LinkButton 클릭 시, 이동할 url

  (ex: <LinkButton text="오늘의 집중" url="/:id/focus" />)
*/
const LinkButton = ({ text, url }) => {
  return (
    <Link to={url} className={styles.linkBtn}>
      <p>{text}</p>
      <img src={icArrowRight} />
    </Link>
  );
};

export default LinkButton;
