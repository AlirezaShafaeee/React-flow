import React from 'react'
import { IconType } from 'react-icons';
import {BsCheck,BsExclamationLg ,BsFillPauseFill} from 'react-icons/bs';
export interface ActiveExtendProp{
    data :
      {
        enName : string , 
        perName : string , 
        handleColor:string,
        minData?:number,
        accData?: number,
        subLabel?:string,
        iconColor: 'danger' | 'success' | 'alert',
        Icon : IconType
      }
    isConnectable : boolean
  }
function ActiveExtend({data,isConnectable}:ActiveExtendProp) {
  return (
    <div>
      <div>
        
      </div>
      <div>

      </div>
    </div>
  )
}

export default ActiveExtend
