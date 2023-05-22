import React from 'react';
import './App.css'
import { invoke } from '@tauri-apps/api/tauri';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Visual from './page/visual';
import Gpt from './page/gpt';

function App() {

  return (
    <>
      <ul>
        <Routes>
          <Route path="/" element={<home />} ></Route>
          <Route path="/visual" element={<Visual />} ></Route>
          <Route path="/gpt" element={<Gpt />} ></Route>
        </Routes>

        <li><NavLink to="/" id="home">home</NavLink></li>
        <li><NavLink to="/gpt" id="gpt">gpt</NavLink></li>
        <li><NavLink to="/visual" id="visual">visual</NavLink></li>
      </ul>
    </>
  )
};



export default App;