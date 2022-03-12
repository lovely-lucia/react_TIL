/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState (['강남 맛집', '강남 핫플레이스', '강남 옷가게']);
  let [모달, 모달변경] = useState (0);
  let [누른제목, 누른제목변경] = useState(0);

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
      <div>
        <button onClick={ ()=>{ 누른제목 = 0}}>버튼1</button>
        <button onClick={ ()=>{ 누른제목 = 1}}>버튼2</button>
        <button onClick={ ()=>{ 누른제목 = 2}}>버튼3</button>
      </div>
      {/* <div>
        { 글제목.map(function(a){
          return (
          <div className="list">
            <h3 onClick={ ()=>{ 누른제목변경(0) } }>{ a } <span>?</span> </h3>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        }) }
      </div> */}
      <button onClick={ ()=>{modal변경(!modal)} }>열고닫기</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      } 
      
    </div>
  );

}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>제목 {props.글제목[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
  
}


export default App;
