import React, { SetStateAction, useEffect, useRef } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import useOutsideAlerter from './hooks/TimeSelectHook';
import { act } from 'react-dom/test-utils';
interface TimeSelectProps{
  active : number,
  open : boolean,
  setOpen : any,
  changeType : any,
  options : string[]
}

function TimeSelect({active,open,setOpen,changeType,options}:TimeSelectProps) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,setOpen);

  return (
    <>
    {open&&
      <div ref={wrapperRef} className='pt-1 pb-2 px-1 bg-[#222746] top-0 left-0 right-0 rounded-2xl m-auto absolute'>
        <div className='text-[#616999] absolute left-2 top-2'><IoIosArrowDown/></div>
        <div className="text-right pt-1 text-white pr-1 text-xs font-bold h7">{options[active]}</div>
        <div className='flex flex-col text-xs items-stretch mt-2 text-right'>
          {options.map((val,ind)=><div onClick={()=>changeType(ind)} className="font-medium p-2 cursor-pointer text-xs rounded-[10px]" style={{color:ind===active ?'white':'#626999',fontWeight : ind===active ?'bold' :'',background : ind ===active?  '#616999':''}}>{val}</div>)}
        </div>
      </div>
    }
    </>
  )
}

export default TimeSelect
