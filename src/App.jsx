import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/pattern.css';
import './styles/reset.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="wrapper">{/* 여기에 각 페이지 내용 작성 */}</div>
      </div>
    </>
  );
}

export default App;
