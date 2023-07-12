import React from 'react'
import { TopicProp } from '../../models/models';
import TopicItem from './TopicItem';
import { Handle, Position } from 'reactflow';
type TopicNodeProp={
    data : {
        list : TopicProp[],
    },
    isConnectable? : boolean,
}
function TopicNode({data,isConnectable} :TopicNodeProp ) {
    const handleStyle = {
        background: '#626999',
        border: 'none',
        height: '8px',
        width: '8px',
        right: '-4px'
    }
  return (
    <div className='bg-[#2D3356] py-[16px] rounded-[15px] px-[20px] text-left font-medium text-white text-[10px] w-[255px] pb-[22px]'>
        <div className='flex justify-between text-center px-[10px] pb-[8px] border-b-[#626999] border-b-[1px] align-middle '>
            <div>
                <span>عنوان تاپیک</span>
            </div>
            <div className='flex'>
                <div className='mr-[20px]'>دیتا</div>
                <div>لگ</div>
            </div>
        </div>
        <div className='CustomScrol mt-[16px] max-h-[500px] flex     flex-col align-middle space-y-3 overflow-y-scroll'>
            {data.list.map((val:TopicProp,ind)=><TopicItem topic={val.topic} key={ind} lag={val.lag} data={val.data}/>)}
        </div>
        <Handle
            id="r"
            type="source"
            position={Position.Right}
            isConnectable={isConnectable}
            style={handleStyle} />
    </div>
  )
}

export default TopicNode