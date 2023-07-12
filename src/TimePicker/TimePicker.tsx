import React, { useState } from 'react'
import TimeItem, { TimeItemProps } from './TimeItem'
import { IoClose } from 'react-icons/io5'
import {IoIosArrowUp} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import TimeSelect from './TimeSelect'
import { options, timeItems } from './data/TimeSettingData'
import type{Value} from "react-multi-date-picker"
const seperator = ','
function TimePicker() {
  const [date , setDate] =useState<Value>(new DateObject(new Date()).convert(persian, persian_fa));
  const [activeItem , setActiveItem] = useState(0);
  const [refreshTime,setRefreshTime] = useState(0);
  const [timeType , setTimeType] = useState(0);
  const [open , setOpen] = useState(false)
  return (
    <div className='flex flex-col max-w-[500px] justify-between w-[40%] max-sm:w-[60%] text-right space-y-4 relative pt-[15px] py-[30px] bg-[#1E223D] rounded-3xl m-auto px-[30px]'>
        <div className='w-[20px] h-[20px] max-sm:h-4 max-sm:w-4 bg-[#616999] absolute left-[30px] max-sm:left-4 max-sm:top-4 top-[30px] rounded-full flex justify-center items-center text-[#1E223D]'><IoClose/></div>
        <div className="text-right text-blue-600 text-sm font-bold">تنظیمات براساس زمان </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-1 gap-y-2'>
            {timeItems.map((val ,ind)=><TimeItem label={val.label} ind={ind} changeItem={setActiveItem} active={ind===activeItem}/>)}
        </div>       
        <div className='flex items-center gap-x-2 max-sm:flex-col max-sm:space-y-2  justify-between'>
            <div className='flex flex-1 max-sm:self-stretch justify-between items-center'>
                  <div className="text-right flex-none text-slate-500 text-xs font-bold ml-1">از تاریخ:</div>
                  <div className=" h-7 flex-1 flex justify-center items-center text-white text-[12px] bg-[#222746] rounded-full">
                      <DatePicker
                          value={date}
                          calendar={persian}
                          onChange={setDate}
                          className="custom-calendar bg-dark"
                          locale={persian_fa}
                          range
                          dateSeparator={seperator}
                          calendarPosition="top-right"
                          mapDays={({ date, isSameDate, selectedDate }) => {
                              if (!(selectedDate instanceof Array)) {
                                  return {

                                      style: {
                                          color: isSameDate(date, selectedDate) ? '#1E223D' : "white",
                                          background: isSameDate(date, selectedDate) ? '#626999' : ''
                                      }
                                  }
                              }
                          }}
                          render={(value:string, openCalendar:any) => {
                            const values =  value.split(seperator);
                            return (
                                <button className='outline-none border-none h-3' onClick={openCalendar}>
                                    {values[0]}
                                </button>
                            )
                          }}
                      />
                  </div>
            </div>
            <div className='flex flex-1 max-sm:self-stretch justify-between items-center'>
                  <div className="text-right flex-none text-slate-500 text-xs font-bold ml-1">از تاریخ:</div>
                  <div className=" h-7 relative flex-1 text-[12px] flex text-white justify-center items-center bg-[#222746] rounded-full">
                      <DatePicker
                          value={date}
                          calendar={persian}
                          onChange={setDate}
                          className="custom-calendar bg-dark"
                          locale={persian_fa}
                          range
                          calendarPosition="top-right"
                          dateSeparator={seperator}
                          mapDays={({date, isSameDate,selectedDate}) => {
                              if(!(selectedDate instanceof Array))
                              {
                              return {

                                  style: {
                                    color: isSameDate(date, selectedDate)?'#1E223D': "white",  
                                    background: isSameDate(date, selectedDate) ? '#626999': ''
                                  }
                              }
                            }
                          }}
                          render={(value:string, openCalendar:any) => {
                            const values =  value.split(seperator);
                            console.log(values)
                            return (
                                <button className='outline-none border-none h-3' onClick={openCalendar}>
                                    {values[1]?values[1] : values[0]} 
                                </button>
                            )
                          }}
                      />
                  </div>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div className="text-right text-slate-500 text-xs font-bold">زمان هر بروزرسانی:</div>
            <div className='flex max-sm:flex-col max-sm:space-y-2 '>
                <div className="relative w-[72px] ml-2 h-7 bg-[#222746] overflow-hidden px-3 rounded-[100px]">
                    <div className='absolute text-[#626999] cursor-pointer left-2 text-xs top-1 bottom-1 flex flex-col justify-between'>
                        <IoIosArrowUp onClick={()=>setRefreshTime(refreshTime+1)}/>
                        <IoIosArrowDown onClick={()=>setRefreshTime(refreshTime?refreshTime-1:refreshTime)}/>
                    </div>
                    <input type="number" value={refreshTime} className='appearance-none bg-transparent w-10/12 text-[12px] text-center text-white border-none outline-none ' />
                </div>
                <div className={["w-24 h-7 cursor-pointer bg-[#222746] flex px-2 items-center relative",open?'rounded-t-2xl':'rounded-full'].join(" ")} onClick={()=>setOpen(true)}>
                <div className='text-[#616999] absolute left-2 top-2'><IoIosArrowDown/></div>
                <div className="text-right text-white text-xs font-bold">{options[timeType]}</div>
                    <TimeSelect setOpen={setOpen} open={open} active={timeType} options={options} changeType={setTimeType}/>
                </div>
            </div>
        </div>
          <div className="w-24 h-7 self-end bg-blue-600 rounded-[15px] flex justify-center items-center text-white text-xs font-bold">
            تایید
        </div>
    </div>
  )
}

export default TimePicker