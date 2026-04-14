import { useState } from 'react';
import styles from '../../components/input/Input.module.css';

const StudyName = ({ title, setTitle }) => {
  const [error, setError] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const validateTitle = (value) => {
    if (!value) {
      return '*스터디 이름을 입력해주세요';
    }
    return '';
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={isTouched && error ? styles.inputError : styles.input}
        type="text"
        placeholder="스터디 이름을 입력해 주세요"
        value={title}
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
          setError(validateTitle(value));
        }}
        onBlur={() => setIsTouched(true)}
      />
      {isTouched && error && (
        <span className={styles.errorMessage}>{error}</span>
      )}
    </div>
  );
};

export default StudyName;
