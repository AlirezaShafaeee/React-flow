
interface topicPannelItemProps {
    data:
        {
            enName : string,
            perName : string,
            label : string,
            extend ?:boolean
        }
}
function TopicPannelItem({data}:topicPannelItemProps) {
  return (
    <div className='flex flex-col bg-[#1A1E36] border border-[#2B3156] justify-center items-center space-y-1 text-white text-[12px] font-[500] rounded-[15px] h-[50px]' style={{ width: data.label ==='toppanelExpend' ?'255px':'140px' }}>
        <div>{data.perName}</div>
          <div className='text-[#626999]'>{data.enName}</div>
    </div>
  )
}

export default TopicPannelItem