import React from 'react'
export interface TimeItemProps{
    label : string,
    active?:boolean,
    changeItem : any,
    ind : number
}
function TimeItem({label,active,changeItem,ind} : TimeItemProps) {
  return (
      <div onClick={()=>changeItem(ind)} className='rounded-full py-2 px-4 cursor-pointer' style={{ backgroundColor: active ? "#616999":'#222746'}}>
          {!active ? <div className="text-center text-slate-500 text-[10px] font-bold">{label}</div>
              : <div className="text-center text-white text-[10px] font-bold">{label}</div>}
    </div>
  )
}

export default TimeItem