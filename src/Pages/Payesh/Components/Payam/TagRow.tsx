import React from 'react'
import TagItem from '../UI/TagItem'
interface tagRowProps{
    labels :string[],
    backgroundColor : string,
    tagBackground : string | string[],
    color:string | string[]
    
}
const TagRow :React.FC<tagRowProps> = ({labels,backgroundColor,tagBackground,color}) => {
  return (
    <div className={'px-1 h-[24px] rounded-[20px] [&>div]:mr-1 [&>*:first-child]:mr-0 flex items-center'} style={{background:backgroundColor}}>
      {labels.map((value:string, index:number)=>{
        return <TagItem label={value} key={index} color={color instanceof Array  ? color[index] : color} backgroundColor={tagBackground instanceof Array ? tagBackground[index]:tagBackground}/>
      })}
    </div>
  )
}

export default TagRow
