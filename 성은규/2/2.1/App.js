import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" onClick={()=>console.log('클릭!')}>BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray" >BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth color="pink" outline>BUTTON</Button>
        <Button color="pink" fullWidth outline>BUTTON</Button>
        <Button size="small" fullWidth color="pink" outline>BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
