import "./App.css";


function App() {
  return (
    <body>
      {/* 头部 */}
      <h1 className="title">Tools</h1>
      {/* 左侧隐藏式任务栏 */}
      <div className="left_taskbar">
        {/* 项目集成在此，新增项目可增加 <li>new project</li> */}
        <ul className="project_items">
          <a href="">
            <li></li>
          </a>
        </ul>
      </div>
      {/* app桌面修饰 */}
      <div className="decorate">
        <input type="text" />
        <button>submit</button>
      </div>
      <div className="background_img"></div>
      {/* 整体说明及使用方法 */}
      <div className="explain">
        {/* <div>Integrated data analysis visualization and machine learning</div> */}
        <div>Integrated: combining or bringing together separate elements to form a whole.</div>
        <div>Data analysis: the process of inspecting, cleaning, transforming, and modeling data to discover useful information.</div>
        <div>Machine learning: the application of artificial intelligence (AI) that enables systems to automatically learn and improve from experience without being explicitly programmed.</div>
      </div>
    </body>
  )
}

export default App;
