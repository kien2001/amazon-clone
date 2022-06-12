import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import CheckOut from './components/checkOut/CheckOut'
import Login from './components/login/Login';
function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={[ <Header />, <CheckOut />]} />
          <Route path='/' element={[ <Header />, <Home />]} />
          <Route path='/login' element = {<Login/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
