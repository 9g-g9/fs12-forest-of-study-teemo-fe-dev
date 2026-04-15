import { useState } from 'react';

import HabitTable from '../../components/StudyDetailComponents/HabitTable/HabitTable';
import Emojis from '../../components/StudyDetailComponents/Emoji/EmojiContainer';
import Interaction from '../../components/StudyDetailComponents/Interaction/Interaction';
import StudyDetail from '../../components/StudyDetailComponents/StudyDetail/StudyDetail';

import PasswordModal from '../../components/Modal/PasswordModal/PasswordModal';
import PasswordInput from '../../components/input/PasswordInput';
import Button from '../../components/Button/Button';

import Toast from '../../components/Toast/Toast';

import styles from './StudyDetailPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';

const StudyDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [btnTxt, setBtnTxt] = useState('수정하러 가기');
  const [link, setLink] = useState('');
  const [crtPassword, setCrtPassword] = useState('');
  const [password, setPassword] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [isToast, setToast] = useState(false);

  // 수정을 눌렀는지 습관을 눌렀는지 로그를 눌렀는지 . . .
  const modalHandler = (type) => {
    setIsOpen(true);
    switch (type) {
      case 'delete':
        setBtnTxt('삭제하기');
        break;
      case 'edit':
        setBtnTxt('수정하러 가기');
        setLink(`/${id}/update`);
        break;
      case 'log':
        setBtnTxt('로그로 가기');
        setLink(`/${id}/logs`);
        break;
      case 'habit':
        setBtnTxt('오늘의 습관으로 가기');
        setLink(`/${id}/habit`);
        break;
      case 'focus':
        setBtnTxt('오늘의 집중으로 가기');
        setLink(`/${id}/focus`);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== crtPassword) {
      // toast ui 튀어나오기
      setToast(true);

      setTimeout(() => setToast(false), 3000);
      return;
    }

    navigate(link);
  };

  return (
    <div className="wrapper">
      <div className={styles.ixWrapper}>
        <Emojis />
        <Interaction onClick={modalHandler} />
      </div>

      <div className={styles.introWrapper}>
        <StudyDetail
          onClick={modalHandler}
          setCrtPassword={setCrtPassword}
          id={id}
        />
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

            <Button
              btnTxt={btnTxt}
              btnStyle="btnDefault"
              btnType={'submit'}
              onClick={(e) => submitHandler(e)}
            />
          </form>
        </PasswordModal>
      )}

      {isToast && (
        <Toast
          toastType="error"
          toastMsg="비밀번호가 일치하지 않습니다. 다시 입력해주세요."
          toastStyle="L"
        />
      )}
    </div>
  );
};

export default StudyDetailPage;
