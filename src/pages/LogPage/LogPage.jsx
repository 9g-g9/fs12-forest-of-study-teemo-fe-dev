import { useState, useEffect } from 'react';
import styles from "./LogPage.module.css";
import LinkButton from '../../components/LinkButton/LinkButton';
import CurrentTime from '../../components/CurrentTime/CurrentTime';
import { formattedTime } from '../../utils/formattedTime';
import arrowLeft from '../../assets/icons/ic_arrow_left_big.svg';
import arrowRight from '../../assets/icons/ic_arrow_right_big.svg';


const Logs = () => {
  const studyId = 5;

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

  const prevDateHandler = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate);
  }

  const nextDateHandler = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
  }

  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = formatDate(date);
        const res = await fetch(`http://localhost:8080/api/logs/${studyId}/pointLogs?date=${formattedDate}`);
        const data = await res.json();

        setPointLogs(data.data || []);
        setFocusLogs(data.data || []);
      } 
    fetchData();
  }, [date]);

  const logList = logType === "point" ? pointLogs : focusLogs;

  return (
    // 페이지 전체 컨테이너
    <div className="wrapper">
      
      {/** top */}
      <div className={styles.topwrapper}>
        {/** 스터디이름, 링크 */}
        <div className={styles.top}>
          <h1 className={styles.title}>
            연우의 개발공장
          </h1>
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
        <div className={styles.dateSelectorContainer}>
          <button onClick={prevDateHandler}>
            <img alt="이전 날짜" src={arrowLeft}/>
          </button>
          <span className={styles.nowDate}>
            {formatDate(date)}
          </span>
          <button onClick={nextDateHandler}>
            <img alt="다음 날짜" src={arrowRight}/>
          </button>
        </div>

        {/* 총합 */}
        <div className={styles.totalBox}>
          <h3 className={styles.logType}>
            {logType === "point" ? "총 획득 포인트" : "총 집중 시간"}
          </h3>

          {logType === "point" ? (
            <h3 className={styles.totalPointValue}>
              {totalPoints.toLocaleString()} P
            </h3>
          ) : (
            <h3 className={styles.totalFocusValue}>
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
                  <span className={styles.rowDate}>
                    {item.createdAt}
                  </span>
                  <span className={styles.rowValue}>
                    {item.points} P
                  </span>
                </>
              ) : (
                <>
                  <span className={styles.rowDate}>
                    {item.createdAt}
                  </span>
                  <span className={styles.rowValue}>
                    {formattedTime(item.focusDuration)}
                  </span>
                </>
              )}
            </div>
          ))
          ) : (
            <>
              <p className={styles.noData}>
                불러올 기록이 없어요.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logs;
