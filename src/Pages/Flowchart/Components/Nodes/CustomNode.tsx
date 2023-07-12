import { Handle, Position } from "reactflow";
import { CustomNodeProps } from "../../models/models";
import { NodeIcon } from "../../utils/Utils";

function CustomNode({data,isConnectable}:CustomNodeProps) {
  const handleStyle = { 
    background : data.handleColor ? data.handleColor :'#626999',
    border:'none',
    height :data.active ? '8px': '5px',
    width: data.active  ? '8px' : '6px',
    left:data.active ? '-4px':'-3px',
  }
  const [iconColor , IconRen] = NodeIcon(data.iconColor?data.iconColor : '');
  return (
    <div className="space-y-[1px] text-[10px] rounded-[15px] items-center justify-center flex flex-col py-[6px] w-[140px]" style={{ backgroundColor:data.backgroundColor ?  data.backgroundColor: data.active ?'#626999' : '#2D3356'}}>
       <div className="w-[12px] h-[12px] flex align-middle items-center justify-center absolute right-[-6px] rounded-full" style={{backgroundColor: data.iconColor ?iconColor:''}}>
        {data.iconColor &&<IconRen style={{fontSize:'13px'}}/>}
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
          <span className="text-white">زمان پاسخ دهی</span>
            <span>{data.SubNumber}</span>
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
