import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
    <Hello name ="react" color="red" isSpecial/> 
    {/* isSpecial이라는 props를 설정
    기본 값 설정안해서 true */}
    <Hello color = "pink"/>
    </Wrapper>
  );
  }

export default App;
