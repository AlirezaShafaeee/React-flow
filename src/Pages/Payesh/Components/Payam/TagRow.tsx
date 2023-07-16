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
    <div className={'px-1 h-[24px] max-lg:py-1 max-lg:h-fit max-lg:w-fit items-center flex-wrap rounded-3xl [&>div]:mr-1 [&>*:first-child]:mr-0 flex'} style={{background:backgroundColor}}>
      {labels.map((value:string, index:number)=>{
        return <TagItem label={value} key={index} color={color instanceof Array  ? color[index] : color} backgroundColor={tagBackground instanceof Array ? tagBackground[index]:tagBackground}/>
      })}
    </div>
  )
}

export default TagRow
