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
const keywords =['آزادی' , 'تهران', 'تهران' , 'ایران' , 'مجلس' , 'رئیسی'];
const keywordsColor  = ['#00796B' , '#0288D1' , '#303F9F' , '#512DA8' , '#C2185B', '#D32F2F'];
const keywordsBackgrounds = ['#B2DFDB' , '#B3E5FC' , '#C5CAE9' , '#D1C4E9' ,'#F8BBD0' , '#FFCDD2'];
const feel = true;
const emotions = ['شادی و خوشحالی', 'ناراحتی' , 'توهین'];
const behaviour = ['سیاسی' , 'اجتماعی' , 'اقتصادی'];
const content = ['میزان تاثیرگذاری' , 'جغرافیای فعالیت' , 'نوع محتوا' , 'نوع فعالیت' , 'گرایش سیاسی'];
const ner = ['ابزارها', 'صنعت' , 'نرم افزار' , 'متخصصان' , 'تکنولوژی'];
const pictures = ['1','2','3']
const PayamItem = () => {
  const [slide,setSlide] = useState(0);
  return (
    <Grid container justifyContent="space-between" className='bg-white py-[17px] px-[25px] rounded-[20px]' spacing={2}>
      <Grid container item direction="column" className='space-y-3 ' lg={2} md={3}>
        <div className="flex items-center mb-2 space-x-2">
          <div className='ml-2'><input className='block' type="checkbox" name="" id="" /></div>
          <div className='rounded-full w-[45px] h-[45px] bg-slate-400'></div>
          <div className="text-right text-zinc-800 text-sm font-bold">روزنامه جمهوری اسلامی</div>
        </div>
        <div className='flex items-center justify-around text-xs font-bold  text-[#737373]'>
          <div className='flex items-center'><span>12.56K</span><BsHeart/></div>
          <div className='flex items-center'><span>12.56K</span><PiShareFat/></div>
          <div className='flex items-center'><span>12.56K</span><TbMessageCircle2/></div>
        </div>
        <div className='flex [&>div]:flex [&>div]:items-center justify-around bg-[#F2F5FA] rounded-full h-[24px] text-[#9797A0] text-[12px] font-medium '>
          <div>کانال</div>
          <div>
            <span className='ml-1'>jepress.ir</span>
            <TelegramIcon/>
          </div>
        </div>
      </Grid>
      {<Grid container className='self-stretch' item lg={1.4} md={3}  > 
        <div className='rounded-xl h-full flex flex-col justify-center p-[5.2px] w-full bg-[#F2F5FA]'>
          <div className='w-full h-full bg-slate-400 rounded-xl'>
            {pictures[slide]}
          </div>
          <div style={{direction:'ltr'}} className='flex space-x-1 mt-1 [&>div]:flex [&>div]:rounded-full m-auto [&>div]:w-2 [&>div]:h-2'>
            {pictures.map((value , index )=><div key={index} className={slide ===index?'bg-[#7158E2]':'bg-[#CFCFCF] cursor-pointer'} onClick={()=>setSlide(index)}></div>)}
          </div>
        </div>
      </Grid> }
      <Grid className='text-right self-stretch justify-self-end [&>div]:flex' container item lg md >
        <div className='w-full justify-between items-start text-[#737373]'>
          <p className='text-[12px] font-medium leading-normal ml-18'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد...</p>
          <div className='flex justify-between items-center [&>div]:mr-2 [&>div]:flex [&>div]:rounded-full [&>div]:justify-center [&>div]:items-center [&>div]:h-[28px] [&>div]:w-[28px]'>
            <div className='bg-[#DFE4EA]'>
              <Bolton/>
            </div>
            <div className='bg-[#DFE4EA]'>
              <Scan/>
            </div>
            <div className='bg-[#F3565F]'>
              <Eye/>
            </div>
          </div>
        </div>
          <div className='flex items-end justify-between w-full [&>div]:self-end [&>div]:flex text-end'>
            <div className='flex text-[10px] [&>span]:ml-4 font-medium justify-end items-end text-[#737373]'>
              <span>1 دقیقه پیش</span>
              <span>شنبه 10 تیر 1402 09:53</span>
            </div>
          <div className='self-end flex-1 flex-wrap-reverse [&>div]:mt-2 space-x-1 flex-row-reverse'>
            {typeof feel!==undefined&&<div className={['h-[24px] w-[66px] rounded-full text-[10px] leading-[22px] font-bold text-center text-white',feel? 'bg-[#01A3A4]':'bg-[#FC427B]'].join(" ")}>{feel ? 'مثبت':'منفی' }</div>}
            <TagRow labels={keywords} backgroundColor='#ECEFF1' color={keywordsColor} tagBackground={keywordsBackgrounds}/>
            <TagRow labels={behaviour} backgroundColor='#DFE3FF' color='#303F9F' tagBackground='#C5CAE9'/>
            <TagRow labels={emotions} backgroundColor='#E0E0FF' color='#2C2C54' tagBackground='#B8B8DE'/>
            <TagRow labels={content} backgroundColor='#DFE4EA' color='#737373' tagBackground='#CCD3DB'/>
            <TagRow labels={ner} backgroundColor='#E0F2FF' color='#3D95D6' tagBackground='#B0DEFF'/>
          </div>
        </div>
      </Grid>
   </Grid>
  )
}

export default PayamItem
