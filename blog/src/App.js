/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(
    ['내가 나이기 싫은 날',
    '나이는 그만 먹고 싶다',
    '프로필 사진을 찍었습니다'
  ]);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color:'blue', fontSize:'30px'} }>개발 blog</div>
      </div>
      <button onClick={ () => {}}> 제목변경 </button>
      <div className="list">
        <h3> { 글제목 [0]} <span onClick={ () => { 따봉변경(따봉 + 1)} }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목 [1]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목 [2]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
