import React from 'react';
import '../../styles/reset.css';
import styles from './Create.module.css';

import NicknameInput from '../../components/input/NicknameInput';
import PasswordInput from '../../components/input/PasswordInput';
import PasswordCheck from '../../components/CreateComponents/PasswordCheck';
import StudyName from '../../components/CreateComponents/StudyName';
import Introduce from './Introduce/Introduce';
import Button from '../../components/Button/Button';
import BackGround from './BackGround/BackGround';
import { createStudy } from '../../services/CreateService';
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
    try {
      const data = {
        nickname,
        title,
        description,
        background,
        password,
      };

      const res = await createStudy(data);

      console.log('성공:', res);
      alert('스터디 생성 완료!');

      navigate(`/${res.id}/detail`);
    } catch (error) {
      console.error(error);
      alert('생성 실패');
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
