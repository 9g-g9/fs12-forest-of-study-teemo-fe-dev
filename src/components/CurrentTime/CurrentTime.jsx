import { useEffect, useState } from "react";
import styles from "./CurrentTime.module.css"

const formatDate = (date) => {
  const year = date.getFullYear();
  {/** 0월부터 시작이므로 +1, 1월이지만 01로 표시해야하므로 2로 설정 */}
  const month = String(date.getMonth() + 1).padStart(2, "0");
  {/** 날짜도 표시형식 맞춤 ex:08 */}
  const day = String(date.getDate()).padStart(2, "0");

  {/** 24시간 기준 (0~23) */}
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  {/** 오전 오후 구분 */}
  const period = hours >= 12 ? "오후" : "오전";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  return `${year}-${month}-${day} ${period} ${hours}:${minutes}`;
};

const CurrentTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
      const timer = setInterval(() => {
        setNow(new Date());
      }, 1000);

      return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <span className={styles.currentTimeLabel}>현재 시간</span>
      <span className={styles.currentTime}>{formatDate(now)}</span>
    </div>
  );
};

export default CurrentTime;