import Button from '../../Button/Button';
import ModalLayout from '../ModalLayout';
import styles from './PasswordModal.module.css';

/*
  PasswordModal 컴포넌트

  title      = 모달 상단에 표시될 제목
  children   = 모달 본문에 들어갈 내용 (input, 안내 문구 등)

  onClose    = 모달 나가기 버튼 클릭 시 실행될 함수

  btnTxt     = 하단 확인 버튼에 표시될 텍스트
  onClick    = 하단 확인 버튼 클릭 시 실행될 함수 (비밀번호 확인 등)
  btnType    = 확인 버튼의 type 속성 ('button' | 'submit')
*/

const PasswordModal = ({
  title,
  onClose,
  children,
  btnTxt,
  onClick,
  btnType,
}) => {
  return (
    <>
      <ModalLayout>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtnDesktop}
          >
            나가기
          </button>
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          <Button
            btnTxt={btnTxt}
            btnStyle="btnDefault"
            onClick={onClick}
            btnType={btnType}
          />
          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtnMobile}
          >
            나가기
          </button>
        </div>
      </ModalLayout>
    </>
  );
};

export default PasswordModal;
