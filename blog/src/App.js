/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState (['강남 맛집', '강남 핫플레이스', '강남 옷가게']);
  let [모달, 모달변경] = useState ();

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color:'blue', fontSize:'30px'} }>개발 blog</div>
      </div>
      <div className="list">
        <h3></h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

function detail() {

}

export default App;
