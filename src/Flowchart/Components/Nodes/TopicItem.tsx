import { TopicProp } from "../../models/models"
function TopicItem({topic , data , lag} : TopicProp) {
  return (
      <div className='flex pr-[7px] text-center align-middle justify-between'>
          <li>{topic}</li>
          <div className='flex text-[#626999]'>
              <div className='mr-[20px]'>{data}</div>
              <div>{lag}</div>
          </div>
      </div>
  )
}

export default TopicItem