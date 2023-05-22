import React, {useRef } from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Visual from './page/visual';
import Gpt from './page/gpt';

function App() {

  const visualRef = useRef(null);

  const gptRef = useRef(null);

  const handVisualRefOnclick = () => {
    visualRef.current.click();
  }

  const handGPTOnclick = () => {
    gptRef.current.click();
  }

  return (
    <>
      <Routes>
        <Route path="/visual" element={<Visual />} ></Route>
        <Route path="/" element={<Gpt />} ></Route>
      </Routes>
      <NavLink to="/" id="gpt" ref={gptRef}></NavLink>
      <NavLink to="/visual" id="visual" ref={visualRef}></NavLink>

      <div className='left_taskbar'>
        <button onClick={handGPTOnclick} id="handGPTOnclick" title='GPT'>GPT</button>
        <button onClick={handVisualRefOnclick} id="handGPTOnclick" title='可视化工具'>visual</button>
      </div>
    </>
  )
};


export default App;