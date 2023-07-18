import { Grid } from '@mui/material';
import React, { useState } from 'react'
import {ReactComponent as TelegramIcon} from '../../Assets/Telegram.svg'
import TagRow from '../UI/TagRow';
import { PayamProps } from '../../Models/Payam';
import SubscriptionInfo from '../Post/SubscriptionInfo';
import SocialInfo from '../Post/SocialInfo';
import Toolbar from '../Post/Toolbar';
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
       {(props.likes||props.forwards || props.comments )&& <SubscriptionInfo likes={props.likes} forwards={props?.forwards} comments={props?.comments}/>}
        <SocialInfo type={props.type} social={props.social}/>
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
          {<Toolbar bolton reference watchFull/>}
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
