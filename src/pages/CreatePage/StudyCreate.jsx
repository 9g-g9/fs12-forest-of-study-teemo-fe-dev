import React from 'react';
import '../../styles/reset.css';
import styles from './Create.module.css';

import NicknameInput from '../../components/input/NicknameInput';
import PasswordInput from '../../components/input/PasswordInput';
import Button from '../../components/Button/Button';

import PasswordCheck from './CreateComponents/PasswordCheck';
import StudyName from './CreateComponents/StudyName';
import Introduce from './CreateComponents/Introduce/Introduce';
import BackGround from './CreateComponents/BackGround/BackGround';

import { postStudy } from '../../services/CreateService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudyCreate = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [background, setBackground] = useState('');

  const handleSubmit = async () => {
    if (!nickname.trim() || !title.trim() || !background || !password.trim()) {
      alert('필수 조건을 충족하지 못했습니다.');
      return;
    }

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    try {
      const data = {
        nickname,
        title,
        description,
        background,
        password,
      };

      const res = await postStudy(data);

      if (!res?.success) {
        alert(res?.message || '스터디 생성 실패');
        return;
      }

      alert('스터디 생성 완료!');
      navigate(`/${res.data.id}/detail`);
    } catch (error) {
      console.error(error);
      alert('서버 오류로 스터디 생성 실패');
    }
  };

  return (
    <>
      <div className={styles.layoutCreate}>
        <div className={styles.wrapperCreate}>
          <h2 className={styles.bigTitle}>스터디 만들기</h2>
          <div>
            <h3 className={styles.title}>닉네임</h3>
            <NicknameInput nickname={nickname} setNickname={setNickname} />

            <h3 className={styles.title}>스터디 이름</h3>
            <StudyName title={title} setTitle={setTitle} />

            <h3 className={styles.title}>소개</h3>
            <Introduce
              description={description}
              setDescription={setDescription}
            />

            <div>
              <h3 className={styles.title}>배경을 선택해주세요</h3>
              <BackGround setBackground={setBackground} />
            </div>
          </div>

          <h3 className={styles.title}>비밀번호</h3>
          <PasswordInput password={password} setPassword={setPassword} />

          <h3 className={styles.title}>비밀번호 확인</h3>
          <PasswordCheck
            password={password}
            setPasswordCheck={setPasswordCheck}
            passwordCheck={passwordCheck}
          />

          <Button
            btnTxt="만들기"
            onClick={handleSubmit}
            btnType="button"
            btnStyle="btnCreate"
          />
        </div>
      </div>
    </>
  );
};

export default StudyCreate;
