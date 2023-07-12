import React from 'react';
import './App.css';
import FlowChart from './Pages/Flowchart/FlowChart';
import { ReactFlowProvider } from 'reactflow';
import TimePicker from './Pages/TimePicker/TimePicker';
import TimeSelect from './Pages/TimePicker/TimeSelect';
import PayamItem from './Pages/Payesh/Components/Payam/PayamItem';

function App() {
  return (
    <div className="App bg-slate-300 py-3 px-4 w-[1620px]">
      <PayamItem/>
    </div>
  );
}

export default App;
