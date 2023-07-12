import { Grid } from '@mui/material';
import React from 'react'
import {BsHeart} from 'react-icons/bs';
import {PiShareFat} from 'react-icons/pi'
import {TbMessageCircle2} from 'react-icons/tb'
import {ReactComponent as TelegramIcon} from '../../Assets/Telegram.svg'
import {ReactComponent as Scan} from '../../Assets/Scan.svg'
import {ReactComponent as Eye} from '../../Assets/Eye.svg'
import {ReactComponent as Bolton} from '../../Assets/bolton.svg'
import imagetest from '../../Assets/Images/imgtest.png'
const PayamItem = () => {
  return (
    <Grid container  className='bg-white py-[17px] px-[25px] rounded-[20px]' gap={1} >
      <Grid container item direction="column" className='space-y-3 ' lg={2}>
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
        <div className='flex justify-around bg-[#F2F5FA] rounded-full py-1 text-[#9797A0] text-xs font-medium '>
          <div>کانال</div>
          <div className="flex items-center">
            <span className='ml-1'>jepress.ir</span>
            <TelegramIcon/>
          </div>
        </div>
      </Grid>
      {/* <Grid container item lg={2}>
        <div className='rounded-xl h-full flex justify-center p-2 w-full bg-[#F2F5FA]'>
        </div>
      </Grid> */}
      <Grid className='text-right self-stretc [&>div]:flex' container item lg={9.9}>
        <div className='w-full justify-between items-start text-[#737373]'>
          <p className='text-[13px] font-medium leading-normal ml-20'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد...</p>
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
        <div className='justify-between w-ful [&>div]:items-end [&>div]:flex text-end'>
          <div className='flex text-[10px] font-medium justify-end items-end text-[#737373]'>
            <span>1 دقیقه پیش</span>
            <span>شنبه 10 تیر 1402 09:53</span>
          </div>
          <div><div className="w-[181px] h-6 bg-indigo-100 rounded-[20px]" /></div>
        </div>
      </Grid>
   </Grid>
  )
}

export default PayamItem
