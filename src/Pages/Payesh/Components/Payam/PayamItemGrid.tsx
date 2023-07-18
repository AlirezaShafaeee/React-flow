import React from 'react'
import { PayamProps } from '../../Models/Payam'
import SocialInfo from '../Post/SocialInfo'
import SubscriptionInfo from '../Post/SubscriptionInfo';
import Toolbar from '../Post/Toolbar';
import TagRow from '../UI/TagRow';
const feel = true;
const keywordsColor = ['#00796B', '#0288D1', '#303F9F', '#512DA8', '#C2185B', '#D32F2F'];
const keywordsBackgrounds = ['#B2DFDB', '#B3E5FC', '#C5CAE9', '#D1C4E9', '#F8BBD0', '#FFCDD2'];
const PayamItemGrid:React.FC<PayamProps> = (props) => {
  return (
    <div className='flex flex-col h-fit max-w-[500px] space-y-2 bg-white py-[20px] px-[18px] rounded-[20px]'>
        <div className="flex items-center mb-2 space-x-1.5">
            <div className='ml-2'><input className='block' type="checkbox" name="" id="" /></div>
            <div className='rounded-full w-[43px] h-[43px] bg-slate-400'></div>
            <div className='space-y-1.5 flex-1'>
                <h3 className="text-right text-zinc-800 text-[14px] font-bold">{props.topic}</h3>
                {props.date && <div className='flex text-[10px] justify-between max-lg:self-start font-medium  items-center text-[#737373]'>
                    <span>1 دقیقه پیش</span>
                    <span>شنبه 10 تیر 1402 0 9:53</span>
                </div>}
            </div>
        </div>
        <div className='h-[250px] w-full bg-slate-300 rounded-[20px]'></div>
        <div className="w-[257px] pb-3 text-justify text-neutral-500 text-xs font-medium leading-snug">{props.body}</div>
      {(props.likes || props.forwards || props.comments)&& <SubscriptionInfo comments={12.56} likes={12.57} forwards={12.57}/>}
      <SocialInfo type='کانال' social='jetpack.ir'/>
      {props.keywords && <TagRow fit labels={props.keywords} backgroundColor='#ECEFF1' color={keywordsColor} tagBackground={keywordsBackgrounds} />}
      {props.behaviour && <TagRow fit labels={props.behaviour} backgroundColor='#DFE3FF' color='#303F9F' tagBackground='#C5CAE9' />}
      {props.emotions && <TagRow fit labels={props.emotions} backgroundColor='#E0E0FF' color='#2C2C54' tagBackground='#B8B8DE' />}
      {props.content && <TagRow fit labels={props.content} backgroundColor='#DFE4EA' color='#737373' tagBackground='#CCD3DB' />}
      {props.ner && <TagRow fit labels={props.ner} backgroundColor='#E0F2FF' color='#3D95D6' tagBackground='#B0DEFF' />}
        <div className={['flex w-full items-center',feel &&(props.bolton || props.watchFull || props.reference)? 'justify-between' : 'justify-center'].join(" ")}>
              {feel !== undefined && <div className={['h-[24px] w-[66px] rounded-full text-[10px] leading-[24px] font-bold text-center', feel ? 'bg-[#BCEBEB]' : 'bg-[#FFD4E2]', feel ? 'text-[#01A3A4]' :'text-[#FC427B]'].join(" ")}>{feel ? 'مثبت' : 'منفی'}</div>}
              {<Toolbar bolton reference watchFull/>}
        </div>
    </div>
  )
}
export default PayamItemGrid;