import React from 'react';
import './App.css';
import './styles/pattern.css';
import './styles/reset.css';
import { Route, Routes } from 'react-router-dom';
import StudyLayout from './layouts/StudyLayout';
import StudyListPage from './pages/StudyListPage/StudyListPage';
import TodayFocus from './pages/TodayFocusPage/TodayFocus';
import LogPage from './pages/LogPage/LogPage';
import TodayHabitPage from './pages/TodayHabitPage/TodayHabitPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudyLayout />}>
          <Route index element={<StudyListPage />} />
          {/* 각 페이지 <Route path="url" element={<페이지 컴포넌트 />} /> 로 추가하기 */}
          <Route path=":id/focus" element={<TodayFocus />} />
          <Route path=":id/logs" element={<LogPage />} />
          <Route path=":id/habit" element={<TodayHabitPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
