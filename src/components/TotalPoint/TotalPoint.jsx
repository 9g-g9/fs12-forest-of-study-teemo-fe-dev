import styles from './TotalPoint.module.css';
import icPoint from '../../assets/icons/ic_point.svg';
import { useEffect, useState } from 'react';

/* ----------------------------------
            총합 포인트 컴포넌트
  -----------------------------------

  id = 각 Study의 ID 
  size = TotalPoint의 크기 (m, default는 s)
  theme = TotalPoint의 테마 (dark, default는 white)

  (ex: <TotalPoint id={ 각 Study의 ID } size={'m'} theme={'dark'} />
       <TotalPoint size={'m'}/> 
       <TotalPoint /> )
*/

const TotalPoint = ({ id, size, theme }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotalPoint = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/points/${id}`);
        if (!res.ok) {
          throw new Error('데이터 로딩에 실패했습니다');
        }
        const { data } = await res.json();

        setTotal(data.totalPoint);
      } catch (error) {
        console.error(error);
      }
    };

    getTotalPoint();
  }, [id, total]);

  return (
    <div
      className={`${styles.point} ${size === 'm' ? styles.medium : ''} ${theme === 'dark' ? styles.dark : ''}`}
    >
      <img src={icPoint} alt="총합 포인트 아이콘" />
      <p>{total}P 획득</p>
    </div>
  );
};

export default TotalPoint;
