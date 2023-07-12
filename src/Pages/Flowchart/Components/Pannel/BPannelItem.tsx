import React from 'react'
import { NodeIcon } from '../../utils/Utils';
interface BPannelItemProps {
  data:
  {
      perName: string,
      iconColor: 'danger' | 'success' | 'alert',
  }
  isConnectable: boolean
}

function BPannelItem({data}:BPannelItemProps) {
  const [iconColor , IconRen] = NodeIcon(data.iconColor?data.iconColor : '');
  return (
    <div className='min-w-[185px] flex justify-end'>
    {data.perName &&
    <div className='flex items-center text-[10px] pr-[5px] pl-[8px] py-1 rounded-full' style={{background:data.iconColor==='alert'?'#6E2D09' : '#68081A',color :data.iconColor==='alert'?'#ED6011' : '#FB1A43'}}>
        <div>{data.perName}</div>
        <div className="w-[12px] font-bold h-[12px] flex align-middle ml-2 items-center justify-center rounded-full text-[#1A1E36]" style={{background:data.iconColor ==='alert' ? '#ED6011':'#FB1A43 '}}>
          <IconRen style={{fontSize:'16px'}}/>
        </div>
    </div>}
    </div>
  )
}

export default BPannelItem