import { NodeDataTypeInterface } from "../models/models";
const levelColors = ['#083346', '#243958','#2B205A','#362547','#003467','#0A3D62','#3A4058'];
export const LevelColor  = (nodeData: NodeDataTypeInterface[]):void=>{
    nodeData.forEach((node)=>
        {
        if(!node.active || [1,6].includes(node.level))
        {
            node.backgroundColor = levelColors[node.level-1]
        }
    })
}