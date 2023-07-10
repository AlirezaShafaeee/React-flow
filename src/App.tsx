import React from 'react';
import './App.css';
import FlowChart from './Flowchart/FlowChart';
import { ReactFlowProvider } from 'reactflow';
import TimePicker from './TimePicker/TimePicker';
import TimeSelect from './TimePicker/TimeSelect';

function App() {
  return (
    <div className="App py-3">
      <TimePicker/>
    </div>
  );
}

export default App;
