import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/img_logo.png';
import './GNB.css';

const GNB = () => {
  const location = useLocation();

  const isCreateBtn = ['/study', '/study/create'].includes(location.pathname);

  return (
    <header className="gnb-wrapper">
      <nav className="gnb-container">
        <Link to="/study">
          <img src={logo} alt="공부의 숲" className="logo" />
        </Link>
        {isCreateBtn && (
          <Link to="/study/create" className="btn create-btn">
            스터디 만들기
          </Link>
        )}
      </nav>
    </header>
  );
};

export default GNB;
