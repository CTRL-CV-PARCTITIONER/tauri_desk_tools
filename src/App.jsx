import React, {useState} from 'react';
import './App.css'
import { invoke } from '@tauri-apps/api/tauri';



function App() {
  //获取输入内容
  const [inputValue, setInputValue] = useState('');
  // 使input标签显示输入内容
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  // 测试是否能获取到输入内容
  const getInputValue = () => {
    // window.alert(inputValue)
    window.alert("你是傻子吧!")
    invoke("excute_python", {introduction: ""})
  }


  return (
    <>
      {/* 头部 */}
      <h1 className="title">ChatGPT-3.5</h1>
      {/* 左侧隐藏式任务栏 */}
      <div className="left_taskbar">
        {/* 项目集成在此，新增项目可增加 <li>new project</li> */}
        <ul className="project_items">
          <li>
          </li>
        </ul>
      </div>
      {/* app桌面修饰 */}
      <div className="decorate">
        <input type="text" value={inputValue} onChange={handleChange}/>
        <button onClick={getInputValue}>submit</button>
      </div>
      <div className="background_img"></div>
      {/* 整体说明及使用方法 */}
      <div className="explain">
        {/* <div>Integrated data analysis visualization and machine learning</div> */}
        <div>Integrated: combining or bringing together separate elements to form a whole.</div>
        <div>Data analysis: the process of inspecting, cleaning, transforming, and modeling data to discover useful information.</div>
        <div>Machine learning: the application of artificial intelligence (AI) that enables systems to automatically learn and improve from experience without being explicitly programmed.</div>
      </div>
    </>
  );
};


export default App;







