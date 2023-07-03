import React from 'react'
import { IconType } from 'react-icons';
import {ReactComponent as DataIcon} from '../../Assets/Datasenter.svg'
import {BsCheck,BsExclamationLg ,BsFillPauseFill} from 'react-icons/bs';
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
        Icon : IconType
      }
    isConnectable : boolean
  }
function ActiveExtend({data,isConnectable}:ActiveExtendProp) {
  return (
    <div className="flex flex-col justify-between items-center w-[140px] h-[195px] bg-[#2D3356] rounded-2xl relative">
      <div className='bg-[#626999] w-[140px]  rounded-2xl py-2 flex flex-col align-middle justify-center items-center text-[10px] space-y-2 text-white'>
        <span><DataIcon/></span>
        <span>سیستم مرکزی جمع آوری داده</span>
        <span className="text-center text-slate-900 text-[10px] font-bold">Data Source System</span>
      </div>
      <div className='flex flex-col py-3 space-y-1 h-full'>
        <div className="text-center text-white text-[10px] font-bold">تعداد داده دریافتی در دقیقه</div>
        <div className="text-center text-slate-500 text-[10px] font-bold">221</div>
        <div className="text-center text-white text-[10px] font-bold">تعداد داده های انباشته شده</div>
        <div className="text-center text-slate-500 text-[10px] font-bold">2256324</div>
      </div>
    </div>
  )
}

export default ActiveExtend
