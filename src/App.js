import React from 'react';
import './App.css';
import BasicClass from './components/BasicClass'
import {BasicFunc, BasicFuncTwo} from './components/BasicFunc'
import Todos from './components/Todos'
import Bus from './components/Bus'

function App() {
  return (
    <div>
      {/* <BasicClass/>
      <BasicFunc/>
      <BasicFuncTwo/> */}
      <Todos/>
      <Bus/>
    </div>
  );
}

export default App;
