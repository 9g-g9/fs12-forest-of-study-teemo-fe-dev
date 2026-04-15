import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LinkButton from '../../components/LinkButton/LinkButton';
import HabitTable from '../../components/StudyDetailComponents/HabitTable/HabitTable';
import Emojis from '../../components/StudyDetailComponents/Emoji/EmojiContainer';
import Interaction from '../../components/StudyDetailComponents/Interaction/Interaction';
import Description from '../../components/StudyDetailComponents/Description/Description';
import PasswordModal from '../../components/Modal/PasswordModal/PasswordModal';
import PasswordInput from '../../components/input/PasswordInput';
import Button from '../../components/Button/Button';
import { getStudyDetail } from '../../services/StudyDetailService';

import styles from './StudyDetailPage.module.css';
import icArrowRight from '../../assets/icons/ic_arrow_right.svg';

const StudyDetailPage = () => {
  const { id } = useParams();
  const [btnTxt, setBtnTxt] = useState('수정하러 가기');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [study, setStudy] = useState([]);

  // 수정을 눌렀는지 습관을 눌렀는지 로그를 눌렀는지 . . .

  const modalHandler = (type) => {
    setIsOpen(true);

    switch (type) {
      case 'edit':
        setBtnTxt('수정하러 가기');
        break;
      case 'log':
        setBtnTxt('로그로 가기');
        break;
      case 'habit':
        setBtnTxt('오늘의 습관으로 가기');
        break;
      case 'focus':
        setBtnTxt('오늘의 집중으로 가기');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setStudy(getStudyDetail(id));
  }, []);

  return (
    <div className="wrapper">
      <div className={styles.ixWrapper}>
        <Emojis />
        <Interaction onClick={modalHandler} />
      </div>

      <div className={styles.introWrapper}>
        <div className={styles.titleContainer}>
          <h1>연우의 개발공장</h1>
          <div className={styles.btnContainer}>
            <button
              className={styles.linkBtn}
              onClick={() => modalHandler('log')}
            >
              <p>로그</p>
              <img src={icArrowRight} />
            </button>
            <button
              className={styles.linkBtn}
              onClick={() => modalHandler('habit')}
            >
              <p>오늘의 습관</p>
              <img src={icArrowRight} />
            </button>
            <button
              className={styles.linkBtn}
              onClick={() => modalHandler('focus')}
            >
              <p>오늘의 집중</p>
              <img src={icArrowRight} />
            </button>
          </div>
        </div>

        <div className={styles.descWrapper}>
          <Description
            descTitle={'소개'}
            descContent={
              'Slow And Steady Wins The Race! 다들 오늘 하루도 화이팅 :)'
            }
          />
          <Description
            descType={'point'}
            descTitle={'현재까지 획득한 포인트'}
          />
        </div>
      </div>

      <main className={styles.innerWrapper}>
        <h2 className={styles.tableTitle}>습관 기록표</h2>

        <HabitTable />
      </main>

      {isOpen && (
        <PasswordModal
          onClose={() => setIsOpen(false)}
          title={'연우의 개발공장'}
        >
          <form>
            <p>권한이 필요해요!</p>
            <label>비밀번호</label>
            <PasswordInput password={password} setPassword={setPassword} />

            <Button btnTxt={btnTxt} btnStyle="btnDefault" btnType={'submit'} />
          </form>
        </PasswordModal>
      )}
    </div>
  );
};

export default StudyDetailPage;
