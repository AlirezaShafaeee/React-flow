import { Edge, Node } from "reactflow"

import {EdgeDataTypeInterface, NodeDataTypeInterface} from '../models/models';
const position = { x: 0, y: 0 };
export const InitNodes= (data : NodeDataTypeInterface[]):Node[]=>{
    const nodes:Node[] = [];
    data.map((val,ind):void=>{
        nodes.push({
            id : (ind + 1).toString(),
            position,
            data: {
                ...val, extend: val.type === "extend" ? true : false, handleColor: val.iconColor === 'alert' ? '#ED6011' : val.iconColor === 'danger' ? '#FB1A43':''},
            type: val.type === 'extendNode' ? 'extendNode': val.type === 'topicPanel' ?'topicPanel' : 'activeNode',
        });
    })
    return nodes;
}
export const InitEdges= (nodes : Node[],edgeData:EdgeDataTypeInterface[]):Edge[]=>{
    const edges:Edge[] = [];
    edgeData.map((val , ind: number)=>{
        const targetNode = nodes.find(({id}:Node)=>id === val.target);
        const sourceNode = nodes.find(({id}:Node)=>id === val.source);
        const stroke :string = targetNode?.data.iconColor==='danger' ? '#FB1A43': targetNode?.data.iconColor ==='alert' ?"#ED6011" : '#626999';
        edges.push({
            id :`e${val.source}-${val.target}-${ind.toString()}`,
            source : val.source,
            target : val.target,
            animated : val.animated,
            type :'smoothstep',
            style : {
                strokeWidth : '2px',
                stroke : stroke,
            },
            sourceHandle : sourceNode?.data.level===targetNode?.data.level ? 'l' : 'r'
        });
    });
    return edges;
}