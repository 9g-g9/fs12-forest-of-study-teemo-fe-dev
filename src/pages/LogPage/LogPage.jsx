import { useState } from 'react';
import "./LogPage.module.css";

const getToday = () => new Date().toLocaleDateString("sv-SE");

const Logs = () => {
  const [date, setDate] = useState(getToday());
  const [logType, setLogType] = useState("focus");

  {/** 임시 데이터 */}
  const logs = {
    pointLogs: [
      { pointId: 1, point: 10, earnedAt: "2026-04-13 10:00" },
      { pointId: 2, point: 20, earnedAt: "2026-04-13 11:00" },
    ],
    focusLogs: [
      { focusId: 1, targetDuration: 60, createdAt: "2026-04-13 09:00" },
      { focusId: 2, targetDuration: 30, createdAt: "2026-04-13 10:30" },
    ],
  };

  const logList = logType === "point" ? logs.pointLogs : logs.focusLogs;


  return (
    <div>
      {/* 날짜 선택 */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* 라디오 버튼 */}
      <div>
        <label>
          <input
            type="radio"
            value="focus"
            checked={logType === "focus"}
            onChange={(e) => setLogType(e.target.value)}
          />
          집중 시간
        </label>
        <label>
          <input 
            type="radio"
            value="point"
            checked={logType === "point"}
            onChange={(e) => setLogType(e.target.value)}
          />
          포인트
        </label>
      </div>

      {/* 로그 리스트 */}
      <ul>
        {logList.map((item) => (
          <li
            key={item.pointId || item.focusId}>
              {logType === "point" ? (
                <>
                  <span>{item.earnedAt}</span>
                  <span> {item.point} P</span>
                </>
              ) : (
                <>
                  <span>{item.createdAt}</span>
                  {/** 추후 표시형식 변경 */}
                  <span> {item.targetDuration}분</span>
                </>
              )}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Logs
