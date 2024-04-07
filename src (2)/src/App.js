import './App.css';
import Home from './components/home.js'
import Live from './components/live.js'
import Content from './components/content.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/live' element={<Live/>}></Route>
        <Route path='/content' element={<Content/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
