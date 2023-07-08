import React from 'react'
interface BPannelItemProps {
    data: {
        enName : string ,
        perName : string
    }
}
function BPannelItem({data}:BPannelItemProps) {
  return (
    <div>
        <div>{data.enName}</div>
        <div>{data.perName}</div>
    </div>
  )
}

export default BPannelItem