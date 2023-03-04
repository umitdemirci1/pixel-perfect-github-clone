import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';

function App() {
  return (
  <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  </>
  );
}

export default App;
