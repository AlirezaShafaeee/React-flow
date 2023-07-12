import dagre from 'dagre';
import { Edge, Node, Position } from 'reactflow';
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const customNodeHeight = 55;
const extendNodeHeight = 90;
const chartOffset = 140
const xOffset = 170;
const yOffset = 0;
const topPanelOffset = 40;
const topicNodeWidth = 400;
const bPanelOffset = 40;
const bPanelyOffset = 800;
const findNodeByLevel= (level : number,nodes:Node[]):Node=>{
  return nodes.find((node :Node)=>node.data.level === level && node.data.active) || {id:'',position:{x:0,y:0},data:{label:''}}
}
const findNodeByLabel = (label: string, nodes: Node[]): Node => {
  return nodes.find((node: Node) => node.data.label === label) || { id: '', position: { x: 0, y: 0 }, data: { label: '' } }
}
const getLayoutedElements = (nodes:Node[], edges:Edge[], direction = 'LR') => {
  dagreGraph.setGraph({ rankdir: direction,nodesep: 40 ,marginx:200,marginy : 100,ranker : 'tight-tree'});

  nodes.forEach((node:Node) => {
    dagreGraph.setNode(node.id , { width: node.id === '0' ? topicNodeWidth : xOffset, height:yOffset } );
  });
  nodes.forEach((node:Node) => {
    let tem = node;
    nodes.forEach((val:Node)=>
    {
      if((tem.data.level +1 ===val.data.level && tem.data.active && val.data.active) || (tem.data.type==="topicPanel" && tem.data.level + 1 ===val.data.level))
      {
        dagreGraph.setEdge(tem.id,val.id);
      }
    })
    
  });

  dagre.layout(dagreGraph);
  
  nodes.forEach((node:Node) => {  
    const nodeWithPosition = dagreGraph.node(node.id);
    const upperNode:Node = findNodeByLabel(`${node.data.label[0]}${node.data.level >=19 ?'p':'-'}${node.data.label[2] - 1}`, nodes)
    node.targetPosition= Position.Left;
    node.targetPosition = Position.Right;
    node.position = {
      x: node.data.active||(node.data.type ==='topicPanel')? nodeWithPosition.x - xOffset : findNodeByLevel(node.data.level, nodes)?.position.x,
      y: node.data.type ==='topicPanel'? topPanelOffset :node.data.type ==='bPannelItem' && node.data.active? bPanelyOffset:  node.data.active ? nodeWithPosition.y + customNodeHeight : upperNode?.position.y + (node.data.type === "extend" && upperNode.data.type === 'extend' ? extendNodeHeight:node.data.type==="bPannelItem" ?bPanelOffset : customNodeHeight),
    };
    return node;
  });

  return { nodes, edges };
};
export default getLayoutedElements