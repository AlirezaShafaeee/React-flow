import React from 'react'
import { ReactComponent as Scan } from '../../Assets/Scan.svg'
import { ReactComponent as Eye } from '../../Assets/Eye.svg'
import { ReactComponent as Bolton } from '../../Assets/bolton.svg'
interface toolbarProps{
    bolton? :boolean,
    reference ?:boolean,
    watchFull ?: boolean,
}
const Toolbar:React.FC<toolbarProps> = (props) => {
  return (
   <div className='flex justify-between max-lg:mb-4 items-center [&>div]:mr-2 [&>div]:flex [&>div]:rounded-full [&>div]:justify-center [&>div]:items-center [&>div]:h-[28px] [&>div]:w-[28px]'>
        {props.bolton&&<div className='bg-[#DFE4EA]'>
            <Bolton/>
        </div>}
        {props.reference &&<div className='bg-[#DFE4EA]'>
            <Scan/>
        </div>}
        {props.watchFull &&<div className='bg-[#F3565F]'>
            <Eye/>
        </div>}
    </div>
  )
}

export default Toolbar
