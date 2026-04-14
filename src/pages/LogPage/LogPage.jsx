import { useState } from 'react';
import styles from "./LogPage.module.css";
import LinkButton from '../../components/LinkButton/LinkButton';

const getToday = () => new Date().toLocaleDateString("sv-SE");

const Logs = () => {
  const [date, setDate] = useState(getToday());
  const [logType, setLogType] = useState("focus");

  const logs = {
    pointLogs: [
      { pointId: 1, point: 10, earnedAt: "2026-04-13 10:00" },
      { pointId: 2, point: 20, earnedAt: "2026-04-13 11:30" },
      { pointId: 3, point: 3050, earnedAt: "2026-04-13 14:00" },
      { pointId: 4, point: 30, earnedAt: "2026-04-13 20:15" },
    ],
    focusLogs: [
      { focusId: 1, targetDuration: 60, createdAt: "2026-04-13 09:00" },
      { focusId: 2, targetDuration: 30, createdAt: "2026-04-13 10:30" },
      { focusId: 3, targetDuration: 70, createdAt: "2026-04-13 12:30" },
      { focusId: 4, targetDuration: 50, createdAt: "2026-04-13 17:30" },
    ],
  };

  const logList = logType === "point" ? logs.pointLogs : logs.focusLogs;

  return (
    // 페이지 전체 컨테이너
    <div className="wrapper">
      
      {/** top */}
      <div className={styles.topwrapper}>
        {/** 스터디이름, 링크 */}
        <div className={styles.top}>
          <h2 className={styles.title}>연우의 개발공장</h2>
          <div className={styles.linkContainer}>
            <LinkButton  
              className={styles.linkButton}
              text="스터디" 
              url="/:id/detail"
            />
            <LinkButton 
              className={styles.linkButton}
              text="홈" 
              url="/"
            />
          </div>
        </div>
        
        <div className={styles.dateWrapper}>
        {/** 시간, 라디오버튼 */}
          <div className={styles.timeContainer}>
            <span>현재 시간</span>
            {/* <CurrentTime /> */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* 라디오 */}
          <div className={styles.radioBox}>
            <label className={styles.radioBoxItem}>
              <input
                type="radio"
                value="focus"
                checked={logType === "focus"}
                onChange={(e) => setLogType(e.target.value)}
              />
              집중 시간
            </label>
            <label className={styles.radioBoxItem}>
              <input 
                type="radio"
                value="point"
                checked={logType === "point"}
                onChange={(e) => setLogType(e.target.value)}
              />
              포인트
            </label>
          </div>       
        </div>

      </div>


      <div className={styles.logWrapper}>
        {/* 총합 */}
        <div className={styles.totalBox}>
          <h3 className={styles.logType}>
            {logType === "point" ? "총 획득 포인트" : "총 집중 시간"}
          </h3>
          <h3 className={styles.totalValue}>
            {/* 임시값 */}
            {logType === "point" ? "30 P" : "90분"}
          </h3>
        </div>

      
        {/* 로그 리스트 */}
        <div className={styles.list}>
          {logList.map((item) => (
            <div
              key={item.pointId || item.focusId}
              className={styles.row}
            >
              {logType === "point" ? (
                <>
                  <span>{item.earnedAt}</span>
                  <span className={styles.rowValue}>{item.point} P</span>
                </>
              ) : (
                <>
                  <span>{item.createdAt}</span>
                  <span className={styles.rowValue}>{item.targetDuration}분</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Logs;
