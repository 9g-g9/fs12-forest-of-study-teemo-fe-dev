import { useState, useEffect } from 'react';
import styles from "./LogPage.module.css";
import LinkButton from '../../components/LinkButton/LinkButton';
import CurrentTime from '../../components/CurrentTime/CurrentTime';
import { formattedTime } from '../../utils/formattedTime';


const Logs = () => {
  const studyId = 1; // 임시값
  
  const [logType, setLogType] = useState("focus");
  const [date, setDate] = useState(new Date());
  const [pointLogs, setPointLogs] = useState([]);
  const [focusLogs, setFocusLogs] = useState([]);

  const totalPoints = (pointLogs || []).reduce((acc, cur) => {
    return acc + (cur.points || 0);
  }, 0);
  const totalFocus = (focusLogs || []).reduce((acc, cur) => {
    return acc + (cur.focusDuration || 0);
  }, 0);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = formatDate(date);
      try {
        const pointRes = await fetch(`http://localhost:8080/api/logs/${studyId}/pointLogs?date=${formattedDate}`);
        const focusRes = await fetch(`http://localhost:8080/api/logs/${studyId}/focusLogs?date=${formattedDate}`);
        
        if (!pointRes.ok || !focusRes.ok) {
          throw new Error("API 호출 실패");
        }

        const pointData = await pointRes.json();
        const focusData = await focusRes.json();

        setPointLogs(pointData.data || []);
        setFocusLogs(focusData.data || []);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
        setPointLogs([]);
        setFocusLogs([]);
      }
    } 
    fetchData();
  }, [date])

  const logList = logType === "point" ? pointLogs : focusLogs;

  return (
    // 페이지 전체 컨테이너
    <div className="wrapper">
      
      {/** top */}
      <div className={styles.topwrapper}>
        {/** 스터디이름, 링크 */}
        <div className={styles.top}>
          <h1 className={styles.title}>연우의 개발공장</h1>
          <div className={styles.linkContainer}>
            <LinkButton  
              className={styles.linkButton}
              text="스터디" 
              url="/:id/detail"
            />
            <LinkButton 
              className={styles.linkButton}
              text="홈" 
              url="/:id/detail"
            />
          </div>
        </div>
        
        <div className={styles.dateWrapper}>
        {/** 시간, 라디오버튼 */}
          <div className={styles.timeContainer}>
            <CurrentTime />
          </div>

          {/* 라디오 */}
          <div className={styles.radioBox}>
            <label 
              className={`${styles.radioBoxItem} ${
                logType === "focus" ? styles.active : ""
              }`}>
              <input
                type="radio"
                value="focus"
                checked={logType === "focus"}
                onChange={(e) => setLogType(e.target.value)}
              />
              집중 시간
            </label>
            <label className={`${styles.radioBoxItem} ${
              logType === "point" ? styles.active : ""
            }`}>
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

          {logType === "point" ? (
            <h3 className={styles.totalValue}>{totalPoints.toLocaleString()} P</h3>
            
          ) : (
            <h3 className={styles.totalValue}>
              {formattedTime(totalFocus)}
            </h3>
          )}
          
          
        </div>

      
        {/* 로그 리스트 */}
        <div className={styles.list}>
          {logList && logList.length > 0 ? (
            logList.map((item) => (
            <div
              key={item.id || item.createdAt}

              className={styles.row}
            >
              {logType === "point" ? (
                <>
                  <span className={styles.rowDate}>{item.createdAt}</span>
                  <span className={styles.rowValue}>{item.points} P</span>
                </>
              ) : (
                <>
                  <span className={styles.rowDate}>{item.createdAt}</span>
                  <span className={styles.rowValue}>{formattedTime(item.focusDuration)}</span>
                </>
              )}
            </div>
          ))
          ) : (
            <div className={styles.noData}>기록이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logs;
