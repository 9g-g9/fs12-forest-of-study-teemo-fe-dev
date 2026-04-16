import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./LogPage.module.css";
import LogHeader from './LogHeader';
import LogDateSelector from './LogDateSelector';
import LogList from './LogList';


const Logs = () => {
  const { studyId } = useParams();
  const [logType, setLogType] = useState("focus");
  const [date, setDate] = useState(new Date());
  const [pointLogs, setPointLogs] = useState([]);
  const [focusLogs, setFocusLogs] = useState([]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = formatDate(date);
        const res = await fetch(`http://localhost:8080/api/logs/${studyId}/logs?date=${formattedDate}`);
        const data = await res.json();

        setPointLogs(data.data || []);
        setFocusLogs(data.data || []);
      } 
    fetchData();
  }, [date, studyId]);


  return (
    // 페이지 전체 컨테이너
    <div className="wrapper">
      <LogHeader 
        studyId={studyId}
        logType={logType}
        setLogType={setLogType}
      />
      <div className={styles.logWrapper}>
        <LogDateSelector 
          date={date}
          setDate={setDate}
          formatDate={formatDate}
        />
        <LogList 
          logType={logType}
          pointLogs={pointLogs}
          focusLogs={focusLogs}
        />
      </div>
      
    </div>
  );
};

export default Logs;
