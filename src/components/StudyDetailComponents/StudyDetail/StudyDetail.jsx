import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Description from '../../../components/StudyDetailComponents/Description/Description';

import icArrowRight from '../../../assets/icons/ic_arrow_right.svg';

import styles from './StudyDetail.module.css';

import { getStudyDetail } from '../../../services/StudyDetailService';

const StudyDetail = ({ onClick, setCrtPassword, id }) => {
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

  return (
    <>
      <div className={styles.titleContainer}>
        <h1>
          {study.nickname}의 {study.title}
        </h1>
        <div className={styles.btnContainer}>
          <button className={styles.linkBtn} onClick={() => onClick('log')}>
            <p>로그</p>
            <img src={icArrowRight} />
          </button>
          <button className={styles.linkBtn} onClick={() => onClick('habit')}>
            <p>오늘의 습관</p>
            <img src={icArrowRight} />
          </button>
          <button className={styles.linkBtn} onClick={() => onClick('focus')}>
            <p>오늘의 집중</p>
            <img src={icArrowRight} />
          </button>
        </div>
      </div>

      <div className={styles.descWrapper}>
        <Description descTitle={'소개'} descContent={study.description} />
        <Description descType={'point'} descTitle={'현재까지 획득한 포인트'} />
      </div>
    </>
  );
};

export default StudyDetail;
