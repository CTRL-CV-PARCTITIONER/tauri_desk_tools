import "./App.css";


function App() {
  return (
    <>
      {/* 头部 */}
      <h1 className="title">Tools</h1>
      {/* 左侧隐藏式任务栏 */}
      <div className="left_taskbar">
        {/* 项目集成在此，新增项目可增加 <li>new project</li> */}
        <ul className="project_items">
          <a href="">
            <li></li>
          </a>
          <a href="">
            <li></li>
          </a>
        </ul>
      </div>
    </>
  )
}

export default App;
