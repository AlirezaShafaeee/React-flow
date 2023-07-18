import React from 'react'
import { ReactComponent as TelegramIcon } from '../../Assets/Telegram.svg'
interface socialProps{
    type?: 'کانال' | 'گروه',
    social : string,
}
const SocialInfo:React.FC<socialProps> = (props) => {
  return (
      <div className='flex [&>div]:flex [&>div]:items-center justify-around bg-[#F2F5FA] rounded-full h-[24px] text-[#9797A0] text-[12px] font-medium '>
          <div>{props.type}</div>
          <div>
              <span className='ml-1'>{props.social}</span>
              <TelegramIcon />
          </div>
      </div>
  )
}

export default SocialInfo
