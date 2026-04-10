import { useState } from 'react';
import './Input.css';

const NicknameInput = ({ nickname, setNickname }) => {
  const [error, setError] = useState('');
  const [newnickname, setNewNickname] = useState(false);

  const validateNickname = (value) => {
    if (!value) return '필수 입력사항입니다.';
    if (value.length < 2) return '닉네임은 2자 이상이어야 합니다.';
    return '';
  };

  return (
    <div className="input-container">
      <input
        className={newnickname && error ? 'input-error' : 'input'}
        type="text"
        placeholder="닉네임을 입력해 주세요"
        value={nickname}
        onChange={(e) => {
          const value = e.target.value;
          setNickname(value);
          setError(validateNickname(value));
        }}
        onBlur={() => setNewNickname(true)}
      />
      {newnickname && error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default NicknameInput;
