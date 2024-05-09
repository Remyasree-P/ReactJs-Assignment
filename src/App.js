// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/secondpage' element={<SecondPage/>}/>
        <Route path='/firstpage' element={<FirstPage/>}/>
        <Route path='/thirdpage' element={<ThirdPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
