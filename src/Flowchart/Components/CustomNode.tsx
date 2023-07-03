import { Handle, Position } from "reactflow";
import {BsCheck,BsExclamationLg ,BsFillPauseFill} from 'react-icons/bs';
import { IconType } from "react-icons";
export interface CustomNodeProps{
  data :
    {
      enName : string , 
      perName : string , 
      active : boolean,
      handleColor:string,
      extend?: boolean,
      subLabel?:string,
      subNumber? : number,
      iconColor: 'danger' | 'success' | 'alert'
    }
  isConnectable : boolean
}
const NodeIcon = (iconColor:string):[string,IconType]=>{
  if(iconColor ==='danger')
    return ['#FB1A43',BsExclamationLg];
  else if(iconColor === 'success')
    return ['#00A053',BsCheck];
  else 
    return ['#ED6011',BsFillPauseFill]
}
function CustomNode({data,isConnectable}:CustomNodeProps) {
  const handleStyle = { 
    background : data.handleColor ? data.handleColor :data.active ? '#626999' : '#2D3356',
    border:'none',
    height : '7px',
    width: '7px',
    left:'-4px'
  }
  const [iconColor , IconRen] = NodeIcon(data.iconColor?data.iconColor : '');
  return (
    <div className="bg-[#2D3356] space-y-[1px] text-[10px] rounded-[15px] items-center justify-center flex flex-col py-[6px] w-[140px] ">
       <div className="w-[12px] h-[12px] flex items-center justify-center absolute right-[-6px] rounded-full" style={{backgroundColor: data.iconColor ?iconColor:''}}>
        {data.iconColor &&<IconRen/>}
       </div>
       <Handle
        id="l-t"
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={handleStyle}
      />
      <Handle
        id="l"
        type="source"
        position={Position.Left}
        isConnectable={isConnectable}
        style={handleStyle}
      />
      <div className="text-white font-[700] ">
        {data.perName}
      </div>
      <div  style={{fontFamily:'Arial',color : !data.active ? '#626999' : '#101428',fontWeight:'bold'}}>
        {data.enName}
      </div>
      {data.extend&&
      <div className="w-full px-2">
        <div className="m-auto w-full font-[700] rounded-[10px] mt-1 text-[#626999] flex justify-between px-3 py-2 flex-row-reverse bg-[#1A1E36]">
          <span className="text-white">{data.subLabel}</span>
          <span>{data.subNumber}</span>
        </div>
      </div>}
      <Handle
      id="r"
      type="source"
      position={Position.Right}
      isConnectable={isConnectable}
      style={{background:'transparent',right:0,border:'none'}}/>
    </div>
  )
}

export default CustomNode
