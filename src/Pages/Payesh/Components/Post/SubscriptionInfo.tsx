import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { PiShareFat } from 'react-icons/pi'
import { TbMessageCircle2 } from 'react-icons/tb'
interface subscriptionProps{
    likes?: number,
    forwards?: number,
    comments?: number
}
const SubscriptionInfo : React.FC<subscriptionProps> = ({likes , forwards, comments}) => {
  return (
        <div className='flex items-center justify-around text-xs font-bold  text-[#737373]'>
            <div className='flex items-center'><span>{likes}</span><BsHeart/></div>
            <div className='flex items-center'><span>{forwards}</span><PiShareFat /></div>
            <div className='flex items-center'><span>{comments}</span><TbMessageCircle2/></div>
        </div>
  )
}

export default SubscriptionInfo