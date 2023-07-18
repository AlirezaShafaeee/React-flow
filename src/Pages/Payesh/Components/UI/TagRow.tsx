import React from 'react'
import TagItem from './TagItem'
interface tagRowProps{
    labels :string[],
    backgroundColor : string,
    tagBackground : string | string[],
    color:string | string[],
    fit ? :boolean
}
const TagRow :React.FC<tagRowProps> = ({labels,backgroundColor,tagBackground,color,fit}) => {
  return (
    <div className={['px-1 py-1 max-lg:h-fit items-center flex-wrap rounded-2xl [&>div]:mr-1 [&>*:first-child]:mr-0 flex', fit ? 'max-lg:w-full ' :'max-lg:w-fit' ].join(" ")} style={{background:backgroundColor}}>
      {labels.map((value:string, index:number)=>{
        return <TagItem label={value} key={index} color={color instanceof Array  ? color[index] : color} backgroundColor={tagBackground instanceof Array ? tagBackground[index]:tagBackground}/>
      })}
    </div>
  )
}

export default TagRow
