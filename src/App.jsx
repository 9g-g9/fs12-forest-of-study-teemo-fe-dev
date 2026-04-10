import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/pattern.css';
import './styles/reset.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Header />
      <Button
        btnTxt={'버튼'}
        btnStyle={'btnDefault'}
        btnType={'button'}
      ></Button>
    </div>
  );
}

export default App;
