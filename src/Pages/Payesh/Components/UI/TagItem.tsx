import React from 'react'
interface tagItemProps {
    label : string,
    backgroundColor : string,
    color : string,
    key: React.Key,
  }
const TagItem:React.FC<tagItemProps>  =({label , backgroundColor , color}) => {
  return (
    <div style={{background : backgroundColor , color:color}} className={`flex w-fit justify-center items-center py-0.5 px-2 rounded-full text-[10px] font-bold`}>
      {label}
    </div>
  )
}

export default TagItem
