import React from 'react'
import { IconType } from 'react-icons';
import { Handle, Position } from 'reactflow';
import { NodeIcon } from '../../utils/Utils';
export interface ActiveExtendProp{
    data :
      {
        enName : string , 
        perName : string , 
        handleColor:string,
        minData?:number,
        accData?: number,
        subLabel?:string,
        iconColor: 'danger' | 'success' | 'alert',
        Icon : IconType,
        DataIcon: any,
        backgroundColor?: string
      }
    isConnectable : boolean
  }
function ActiveExtend({data,isConnectable}:ActiveExtendProp) {
  const handleStyle = {
    background: data.handleColor ? data.handleColor : '#626999',
    border: 'none',
    height:'8px',
    width: '8px',
    left: '-4px',
  }

  const [iconColor, IconRen] = NodeIcon(data.iconColor ? data.iconColor : '');
  const Icon = data.DataIcon;
  return (
    <div className="flex flex-col justify-between items-center w-[140px] h-[195px]  rounded-2xl relative" style={{background : data.backgroundColor ? data.backgroundColor : '#2D3356'}}>
      <div className='bg-[#626999] relative w-[140px] h-[100px] rounded-2xl py-3 flex flex-col align-middle justify-center items-center text-[10px] space-y-1 text-white'>
        <div className="w-[14px] h-[14px] flex align-middle items-center justify-center absolute right-[-6px] rounded-full" style={{ backgroundColor: data.iconColor ? iconColor : '' }}>
          {data.iconColor && <IconRen style={{ fontSize: '13px', color: '#2D3356  ' }} />}
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
        <span className='mt-1'>{data.DataIcon &&<Icon/>}</span>
        <span>{data.perName}</span>
        <span className="text-center text-slate-900 text-[10px] font-bold">{data.enName}</span>
      </div>
      <div className='flex flex-col py-3 space-y-1 h-full'>
        <div className="text-center text-white text-[10px] font-bold">تعداد داده دریافتی در دقیقه</div>
        <div className="text-center text-slate-500 text-[10px] font-bold">{data.minData}</div>
        <div className="text-center text-white text-[10px] font-bold">تعداد داده های انباشته شده</div>
        <div className="text-center text-slate-500 text-[10px] font-bold">{data.accData}</div>
      </div>
      <Handle
        id="r"
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ background: 'transparent',top:'25%', right: 0, border: 'none' }} />
    </div>
  )
}

export default ActiveExtend
