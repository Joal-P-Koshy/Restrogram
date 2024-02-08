import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Review from './pages/Review';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/menu' element={ <Menu/> }/>
        <Route path='/review' element={ <Review/> }/>
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>

      
    </>
  );
}

export default App;
