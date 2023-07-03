import React from 'react';
import './App.css';
import FlowChart from './Flowchart/FlowChart';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <div className="App">
      <ReactFlowProvider>
        <FlowChart/>
      </ReactFlowProvider> 
    </div>
  );
}

export default App;
