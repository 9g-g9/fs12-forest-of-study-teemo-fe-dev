import React from 'react';
import './App.css';
import './styles/pattern.css';
import './styles/reset.css';
import Header from './components/Header/Header';
import StudyList from './pages/StudyListPage/StudyListPage';

const App = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <StudyList />
      </div>
    </>
  );
};

export default App;
