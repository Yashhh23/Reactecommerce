// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/api')
    .then((res) => { return res.json() })
    .then((data) => { console.log(data) })
  }, [])
  return (
    <>
    <Router>
    <Header />
    <div>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Cart' element={<Cart />}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
