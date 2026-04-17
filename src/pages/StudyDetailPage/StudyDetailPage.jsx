import { useEffect, useState } from 'react';

import HabitTable from '../../components/StudyDetailComponents/HabitTable/HabitTable';
import Emojis from '../../components/StudyDetailComponents/Emoji/EmojiContainer';
import Interaction from '../../components/StudyDetailComponents/Interaction/Interaction';
import StudyDetail from '../../components/StudyDetailComponents/StudyDetail/StudyDetail';
import ModalLayout from '../../components/Modal/ModalLayout';

import PasswordModal from '../../components/Modal/PasswordModal/PasswordModal';
import PasswordInput from '../../components/input/PasswordInput';
import Button from '../../components/Button/Button';

import Toast from '../../components/Toast/Toast';

import styles from './StudyDetailPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import {
  deleteStudy,
  validatePassword,
  getStudyDetail,
} from '../../services/StudyDetailService.js';

const StudyDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [btnTxt, setBtnTxt] = useState('수정하러 가기');
  const [link, setLink] = useState('');
  const [crtPassword, setCrtPassword] = useState('');
  const [password, setPassword] = useState('');

  const [toastMsg, setToastMsg] = useState('');
  const [toastType, setToastType] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [study, setStudy] = useState([]);

  const fetchStudy = async () => {
    try {
      const data = await getStudyDetail(id);

      if (!data) {
        return;
      }

      setStudy(data);
      setCrtPassword(data.password);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchStudy();
  }, []);

  // 수정을 눌렀는지 습관을 눌렀는지 로그를 눌렀는지 . . .
  const modalHandler = (type) => {
    setIsOpen(true);
    switch (type) {
      case 'delete':
        setBtnTxt('삭제하기');
        setLink('delete');
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

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = await validatePassword(id, password);
    const isCorrect = data.correct;

    if (!isCorrect) {
      // toast ui 튀어나오기

      setToastMsg('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
      setToastType('error');

      setIsToast(true);

      setTimeout(() => setIsToast(false), 3000);
      return;
    }

    if (link === 'delete') {
      setIsOpen(false);
      setIsDeleteOpen(true);
      setPassword('');
      return;
    }

    navigate(link);
  };

  const shareHandler = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);

    setToastMsg('링크가 복사되었습니다!');
    setToastType('success');

    if (isToast) {
      setIsToast(false);
    }

    setIsToast(true);

    setTimeout(() => setIsToast(false), 3000);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();

    setIsDeleteOpen(false);

    const data = await deleteStudy(id);

    setIsCompleteOpen(true);
  };

  return (
    <div className="wrapper">
      <div className={styles.ixWrapper}>
        <Emojis />
        <Interaction onClick={modalHandler} onShare={shareHandler} />
      </div>

      <div className={styles.introWrapper}>
        <StudyDetail
          onClick={modalHandler}
          setCrtPassword={setCrtPassword}
          id={id}
          study={study}
        />
      </div>

      <main className={styles.innerWrapper}>
        <h2 className={styles.tableTitle}>습관 기록표</h2>

        <HabitTable id={id} />
      </main>

      {isOpen && (
        <PasswordModal
          onClose={() => {
            setIsOpen(false);
            setPassword('');
          }}
          title={`${study.nickname}의 ${study.title}`}
        >
          <form>
            <p className={styles.formMessage}>권한이 필요해요!</p>
            <div className={styles.formInputField}>
              <label htmlFor="pw-id">비밀번호</label>
              <PasswordInput password={password} setPassword={setPassword} />
            </div>

            <Button
              btnTxt={btnTxt}
              btnStyle="btnDefault"
              btnType={'submit'}
              onClick={(e) => submitHandler(e)}
            />
          </form>
        </PasswordModal>
      )}

      {isDeleteOpen && (
        <ModalLayout>
          <div className={styles.modalMsgBox}>
            <p>정말 삭제하시겠습니까?</p>
          </div>
          <div className={styles.modalBtnBox}>
            <Button
              btnTxt={'취소'}
              btnStyle="btnCancel"
              btnType={'button'}
              onClick={() => setIsDeleteOpen(false)}
            />
            <Button
              btnTxt={'확인'}
              btnStyle="btnModification"
              btnType={'button'}
              onClick={(e) => deleteHandler(e)}
            />
          </div>
        </ModalLayout>
      )}

      {isCompleteOpen && (
        <ModalLayout>
          <div className={styles.modalMsgBox}>
            <p>삭제가 완료되었습니다.</p>
          </div>
          <div className={styles.modalBtnBox}>
            <Button
              btnTxt={'홈으로'}
              btnStyle="btnDefault"
              btnType={'button'}
              onClick={() => navigate('/')}
            />
          </div>
        </ModalLayout>
      )}

      {isToast && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Toast toastType={toastType} toastMsg={toastMsg} />
        </div>
      )}
    </div>
  );
};

export default StudyDetailPage;
