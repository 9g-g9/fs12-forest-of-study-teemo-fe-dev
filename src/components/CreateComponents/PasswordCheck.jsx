import { useState } from 'react';
import styles from '../input/Input.module.css';
import closeeye from '../../assets/icons/ic_close_eye.png';
import openeye from '../../assets/icons/ic_eye.png';

const PasswordCheck = ({ password, passwordCheck, setPasswordCheck }) => {
  const [error, setError] = useState('');
  const [newpassword, setNewPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (value) => {
    if (!value) {
      return '필수 입력사항입니다.';
    }
    if (value.length < 8) {
      return '비밀번호는 8자 이상이어야 합니다.';
    }
    if (value !== password) {
      return '비밀번호가 일치하지 않습니다';
    }
    return '';
  };

  return (
    <div className={styles.passwordContainers}>
      <div className={styles.inputWrapper}>
        <input
          className={`${newpassword && error ? styles.inputError : styles.input} ${styles.passwordInput}`}
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해 주세요"
          value={passwordCheck}
          onChange={(e) => {
            const value = e.target.value;
            setPasswordCheck(value);
            setError(validatePassword(value));
          }}
          onBlur={() => setNewPassword(true)}
        />

        <img
          src={showPassword ? openeye : closeeye}
          alt="toggle password"
          className={styles.togglePassword}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      {newpassword && error && (
        <span className={styles.errorMessage}>{error}</span>
      )}
    </div>
  );
};

export default PasswordCheck;
