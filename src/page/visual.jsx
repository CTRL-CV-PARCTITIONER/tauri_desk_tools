import React, {useState} from 'react';
import '../css/visual.css'
import { invoke } from '@tauri-apps/api/tauri';
import ReactPlayer from 'react-player';


function Visual() {
  // 此处开始作用与生成视频
  const [imgPath, setImgPath] = useState('');

  const [videoWidth, setVideoWidth] = useState('');

  const [videoHeight, setVideoHeight] = useState('');

  const [videoFps, setVideoFps] = useState('');

  const [videoSavePath, setVideoSavePath] = useState('');

  const handleImgPathChange = (event) => {
    setImgPath(event.target.value);
  };

  const handleVideoWidthChange = (event) => {
    setVideoWidth(event.target.value);
  };

  const handleVideoHeightChange = (event) => {
    setVideoHeight(event.target.value);
  };

  const handleVideoFpsChange = (event) => {
    setVideoFps(event.target.value);
  };

  const handlesetVideoSavePathChange = (event) => {
    setVideoSavePath(event.target.value);
  };

  const getInputValue = () => {
    let flag = false;
    let value_list = [imgPath, videoWidth, videoHeight, videoFps];
    let introduction_str = 
      "{"
      + `"img_save_root":"${imgPath.trim().replace(/\\/g, "/")}",` 
      + `"video_width":${videoWidth},"video_height":${videoHeight},`
      + `"video_fps":${videoFps},`
      + `"video_save_path":"${videoSavePath.trim().replace(/\\/g, "/")}"`
      + "}"
    ;
    for(let i = 0; i < value_list.length; i++) {
      if (value_list[i] == ""){
        alert("不能输入空值！");
        flag = true;
        break;
      }
    };
    if (flag == false) {
      invoke(
        "generate_video", {
          introduction: introduction_str, 
        }
      );
      alert("执行成功!");
      setImgPath("");
      setVideoWidth("");
      setVideoHeight("");
      setVideoFps("");
      setVideoSavePath("");
    }
  }

  // 此处开始作用于播放视频
  const [inputValue, setInputValue] = useState("");

  const handleinputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const getInputPlayVideoValue = () => {
    if (inputValue == "") {
      alert("输入不能为空!");
    } else {
      let introduction_str = inputValue.trim().replace(/\\/g, "/")
      invoke("play_video", {
        introduction: introduction_str
      });
      alert("执行成功!");
      setInputValue("")
    }
  }
  

  return (
    <div>
      <h1 className='title'>可视化</h1>
      <div className='tool_part'>
        <b className='cut_off_rule'></b>
        <div className='left'>
          <h3>生成视频</h3>
          <ul>
            <li><input type="text" placeholder='图像路径' className='img_path' value={imgPath} onChange={handleImgPathChange}/></li>
            <li><input type="text" placeholder='分辨率宽度,确保与图像一致' className='video_width' value={videoWidth} onChange={handleVideoWidthChange}/></li>
            <li><input type="text" placeholder='分辨率高度,确保与图像一致' className='video_height' value={videoHeight} onChange={handleVideoHeightChange}/></li>
            <li><input type="text" placeholder='帧率' className='video_fps' value={videoFps} onChange={handleVideoFpsChange}/></li>
            <li><input type="text" placeholder='视频存放位置' className='video_save_path' value={videoSavePath} onChange={handlesetVideoSavePathChange}/></li>
          </ul>
          <button onClick={getInputValue}><b>运行</b></button>
        </div>
        <div className='right'>
          <h3>播放视频</h3>
          <input type="text" className='display_frame' id='display_frame' placeholder='输入视频路径,输入q终止' value={inputValue} onChange={handleinputValueChange}/>
          <button onClick={getInputPlayVideoValue} className='play_video'><b>播放视频</b></button>
        </div>
      </div>
    </div>
  );
};


export default Visual;







