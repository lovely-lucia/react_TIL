/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['내가 나이기 싫은 날','나이는 그만 먹고 싶다','프로필 사진을 찍었습니다'
  ]);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  let [modal, modal변경] = useState(false);


  /* function 제목바꾸기 (){
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  } */

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color:'blue', fontSize:'30px'} }>개발 blog</div>
      </div>
      <div className="list">
        <h3> { 글제목 [0]} </h3>
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
      <button onClick={ () => {modal변경(!modal)} }> 모달 팝업</button>
      
      {
        modal === true 
        ? <Modal 글제목={글제목} ></Modal> 
        : null
      } 
       
      {
        글제목.map(function(글){
          return (
            <div className="list">
              <h3> { 글 } <span onClick={ () => { 따봉변경(따봉 + 1)} }>👍</span> {따봉} </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
        <h2>제목 { props.글제목[0] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
