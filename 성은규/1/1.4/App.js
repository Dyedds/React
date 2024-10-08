import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
    {/* 주석은 화면에 보이지 않습니다 */}
    /* 중괄호로 감싸지 않으면 화면에 보입니다 */
      <Hello
        //열리는 태그 내부에서는 이렇게 주석 작성 가능
      />
      <div style = {style}>{name}</div>
      <div className = "gray-box"></div>
    </>
  );
}

export default App;
