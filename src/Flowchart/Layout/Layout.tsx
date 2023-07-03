import dagre from 'dagre';
import { Edge, Node, Position } from 'reactflow';
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const nodeWidth = 300;
const nodeHeight = 30;
const getLayoutedElements = (nodes:Node[], edges:Edge[], direction = 'RL') => {
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node:Node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight});
  });

  nodes.forEach((node:Node) => {
    let tem = node;
    nodes.forEach((val:Node)=>
    {
      if(parseInt(val.data.label)+1 === parseInt(tem.data.label) && val.id[2] === '1')
      {
        dagreGraph.setEdge(tem.id,val.id);
        
      }
    })
    
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node:Node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition= Position.Left;
    node.targetPosition = Position.Right;
    node.type = "activeNode";
    node.position = {
      x: nodeWithPosition.x - nodeWidth,
      y: nodeWithPosition.y - nodeHeight,
    };

    return node;
  });

  return { nodes, edges };
};
export default getLayoutedElements