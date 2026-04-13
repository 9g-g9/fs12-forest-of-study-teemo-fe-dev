import React from 'react';
import '../../styles/reset.css';
import styles from './Create.module.css';

import Header from '../../components/Header/Header';
import NicknameInput from '../../components/input/NicknameInput';
import PasswordInput from '../../components/input/PasswordInput';
import PasswordCheck from '../../components/CreateComponents/PasswordCheck';
import StudyName from '../../components/CreateComponents/StudyName';
import Introduce from '../../components/CreateComponents/Introduce/Introduce';
import CreateButton from '../../components/CreateComponents/CreateButton/CreateButton';
import { useState } from 'react';

const StudyCreate = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [title, setTitle] = useState('');

  return (
    <>
      <Header />
      <div className={styles.layoutCreate}>
        <div className={styles.wrapperCreate}>
          <h2 className={styles.bigTitle}>스터디 만들기</h2>
          <div>
            <h3 className={styles.title}>닉네임</h3>
            <NicknameInput nickname={nickname} setNickname={setNickname} />

            <h3 className={styles.title}>스터디 이름</h3>
            <StudyName title={title} setTitle={setTitle} />

            <h3 className={styles.title}>소개</h3>
            <Introduce />

            <h3 className={styles.title}>배경을 선택해주세요</h3>
            <input />
          </div>

          <h3 className={styles.title}>비밀번호</h3>
          <PasswordInput password={password} setPassword={setPassword} />

          <h3 className={styles.title}>비밀번호 확인</h3>
          <PasswordCheck
            password={password}
            setPasswordCheck={setPasswordCheck}
            passwordCheck={passwordCheck}
          />

          <CreateButton />
        </div>
      </div>
    </>
  );
};

export default StudyCreate;
