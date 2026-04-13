import React from 'react';
import './App.css';
import './styles/pattern.css';
import './styles/reset.css';
import { Route, Routes } from 'react-router-dom';
import StudyLayout from './layouts/StudyLayout';
import TodayFocus from './pages/TodayFocusPage/TodayFocus';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudyLayout />}>
          {/* 홈페이지는 <Route index element={<페이지 컴포넌트 />} /> 로 추가하기 */}
          {/* 각 페이지 <Route path="url" element={<페이지 컴포넌트 />} /> 로 추가하기 */}
          <Route path=":id/focus" element={<TodayFocus />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
