import { Grid } from '@mui/material';
import React, { useState } from 'react'
import {BsHeart} from 'react-icons/bs';
import {PiShareFat} from 'react-icons/pi'
import {TbMessageCircle2} from 'react-icons/tb'
import {ReactComponent as TelegramIcon} from '../../Assets/Telegram.svg'
import {ReactComponent as Scan} from '../../Assets/Scan.svg'
import {ReactComponent as Eye} from '../../Assets/Eye.svg'
import {ReactComponent as Bolton} from '../../Assets/bolton.svg'
import TagRow from './TagRow';
import { PayamProps } from '../../Models/Payam';
const keywordsColor = ['#00796B', '#0288D1', '#303F9F', '#512DA8', '#C2185B', '#D32F2F'];
const keywordsBackgrounds = ['#B2DFDB', '#B3E5FC', '#C5CAE9', '#D1C4E9', '#F8BBD0', '#FFCDD2'];
const PayamItem: React.FC<PayamProps> = (props) => {
  const [slide,setSlide] = useState(0);
  return (
    <Grid container justifyContent="space-between" className='bg-white py-[17px] px-[25px] rounded-[20px]' spacing={2}>
      <Grid container item direction="column" justifyContent="space-between" className='space-y-3 lg:self-stretch' lg={props.pictures ?5 :3} xl={2} md>
        <div className="flex items-center mb-2 space-x-2">
          <div className='ml-2'><input className='block' type="checkbox" name="" id="" /></div>
          <div className='rounded-full w-[43px] h-[43px] bg-slate-400'></div>
          <div className="text-right text-zinc-800 text-[12px] font-bold">{props.topic}</div>
        </div>
       {props.likes && <div className='flex items-center justify-around text-xs font-bold  text-[#737373]'>
          <div className='flex items-center'><span>{props.likes}</span><BsHeart/></div>
          <div className='flex items-center'><span>{props.forwards}</span><PiShareFat/></div>
          <div className='flex items-center'><span>{props.comments}</span><TbMessageCircle2/></div>
        </div>}
        <div className='flex [&>div]:flex [&>div]:items-center justify-around bg-[#F2F5FA] rounded-full h-[24px] text-[#9797A0] text-[12px] font-medium '>
          <div>{props.type}</div>
          <div>
            <span className='ml-1'>{props.social}</span>
            <TelegramIcon/>
          </div>
        </div>
      </Grid>
      {props.pictures &&<Grid container className='min-xl:self-stretch' item lg={3} xl={1.4} md={3}> 
        <div className='rounded-xl h-full flex flex-col max-sm:h-[200px]  max-lg:h-[250px] justify-center p-[5.2px] w-full bg-[#F2F5FA]'>
          <div className='w-full h-full bg-slate-400 rounded-xl'>
            {props.pictures[slide]}
          </div>
          <div style={{direction:'ltr'}} className='flex space-x-1 mt-1 [&>div]:flex [&>div]:rounded-full m-auto [&>div]:w-2 [&>div]:h-2'>
            {props.pictures.map((value , index )=><div key={index} className={slide ===index?'bg-[#7158E2]':'bg-[#CFCFCF] cursor-pointer'} onClick={()=>setSlide(index)}></div>)}
          </div>
        </div>
  </Grid> }
      <Grid justifyContent="space-around " className='text-right self-stretch justify-self-end [&>div]:flex' container item xl lg={props.pictures ? 12:9} >
        <div className='w-full justify-between items-center max-lg:flex-col-reverse text-[#737373]'>
          <p className='text-[12px] font-medium leading-normal ml-18'>{props.body}</p>
          {<div className='flex justify-between max-lg:mb-4 items-center [&>div]:mr-2 [&>div]:flex [&>div]:rounded-full [&>div]:justify-center [&>div]:items-center [&>div]:h-[28px] [&>div]:w-[28px]'>
            {props.bolton&&<div className='bg-[#DFE4EA]'>
              <Bolton/>
            </div>}
            {props.reference &&<div className='bg-[#DFE4EA]'>
              <Scan/>
            </div>}
            {props.watchFull &&<div className='bg-[#F3565F]'>
              <Eye/>
            </div>}
          </div>}
        </div>
        <div className='flex items-end justify-between max-lg:flex-col-reverse  w-full  [&>div]:flex text-end'>
            {<div className='flex text-[10px] [&>span]:ml-4 max-lg:self-start font-medium justify-end items-end text-[#737373]'>
              <span>1 دقیقه پیش</span>
              <span>شنبه 10 تیر 1402 0 9:53</span>
            </div>}
          {<div className='self-end flex-1 max-lg:flex-col-reverse  max-lg:justify-self-end flex-wrap-reverse [&>div]:mt-2 space-x-1 flex-row-reverse'>
            {props.feel!==undefined &&<div className={['h-[24px] w-[66px] rounded-full text-[10px] leading-[22px] font-bold text-center text-white',props.feel? 'bg-[#01A3A4]':'bg-[#FC427B]'].join(" ")}>{props.feel ? 'مثبت':'منفی' }</div>}
            {props.keywords &&<TagRow labels={props.keywords} backgroundColor='#ECEFF1' color={keywordsColor} tagBackground={keywordsBackgrounds}/>}
            {props.behaviour && <TagRow labels={props.behaviour} backgroundColor='#DFE3FF' color='#303F9F' tagBackground='#C5CAE9'/>}
            {props.emotions && <TagRow labels={props.emotions} backgroundColor='#E0E0FF' color='#2C2C54' tagBackground='#B8B8DE'/>}
            {props.content && <TagRow labels={props.content} backgroundColor='#DFE4EA' color='#737373' tagBackground='#CCD3DB'/>}
            {props.ner && <TagRow labels={props.ner} backgroundColor='#E0F2FF' color='#3D95D6' tagBackground='#B0DEFF'/>}
</div>  }
        </div>
      </Grid>
   </Grid>
  )
}

export default PayamItem
