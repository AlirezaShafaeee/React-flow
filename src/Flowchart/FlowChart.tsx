import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Node,
  BackgroundVariant,
  ConnectionLineType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './Components/Nodes/CustomNode';
import getLayoutedElements from './Layout/Layout';

import { nodeData } from './data/nodeData';
import ActiveExtend from './Components/Nodes/ActiveExtend';
import TopicNode from './Components/Nodes/TopicNode';
import { InitEdges, InitNodes } from './utils/MakeFlow';
import { TopicData } from './data/topicData';
import { edgeData } from './data/edgeData';
import TopicPannelItem from './Components/Pannel/TopicPannelItem';
import { LevelColor } from './utils/LevelColor';
import BPannelItem from './Components/Pannel/BPannelItem';

const rfStyle = {
  backgroundColor: "#1A1E36"
};
const firstNode:Node = {
    id:"0",
    position : {x : 0, y : 0},
    data:  {
      label : '0',
      list: TopicData,
      level : 0, 
      active : true
    },
    type: 'topicNode'
} 
const nodeTypes = { activeNode: CustomNode,
  extendNode:ActiveExtend,
  topicNode : TopicNode,
  topicPanel : TopicPannelItem,
  bPannelItem : BPannelItem,
};
export default function App() {
  LevelColor(nodeData);
  const initialNodes = InitNodes(nodeData);
  initialNodes.unshift(firstNode);
  const initialEdges = InitEdges(initialNodes, edgeData);
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(layoutedEdges);
  
  const onConnect = useCallback(
    (params:any) =>
      setEdges((eds) =>
        addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)
      ),
    []
  );
  
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        
        nodeTypes={nodeTypes}
        style={rfStyle}>
        <Background color='#3e4887c0' variant={BackgroundVariant.Dots} gap={18} size={2} />
      </ReactFlow>
    </div>
  );
}