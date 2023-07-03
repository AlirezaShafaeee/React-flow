import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Node,
  OnConnect,
  BackgroundVariant,
  ConnectionLineType,
} from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode from './Components/CustomNode';
import getLayoutedElements from './Layout/Layout';
import { initialEdges, initialNodes } from './texnode-ed';
import { InitNodes } from './utils/MakeFlow';
import { nodeData } from './data/nodeData';
import ActiveExtend from './Components/ActiveExtend';

const rfStyle = {
  backgroundColor: "#1A1E36"
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);
const nodeTypes = { activeNode: CustomNode,extendNode:ActiveExtend};
export default function App() {
  console.log(InitNodes(nodeData));
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(InitNodes(nodeData));
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(layoutedEdges);

  const onConnect = useCallback(
    (params:any) =>
      setEdges((eds) =>
        addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)
      ),
    []
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        nodeTypes={nodeTypes}
        style={rfStyle}>
        <Background color='#3e4887c0'  variant={BackgroundVariant.Dots} gap={18} size={2} />
      </ReactFlow>
    </div>
  );
}