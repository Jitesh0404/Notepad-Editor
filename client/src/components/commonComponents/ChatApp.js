import UserMessage from './UserMessage'
import { SiWechat } from 'react-icons/si'
import { BsEmojiSmile } from 'react-icons/bs'
import { FaUpload } from 'react-icons/fa';
export const ChatApp = () => {
  return (
    <div className='basis-1/4 flex flex-col rounded-2xl h-[60%] bg-white self-end'>
          <div className='basis-1/6 bg-[#3047EC] rounded-lg flex justify-center items-center gap-2'>
            <SiWechat color='white' size={30}/>
            <h4 className='text-white font-bold'>Chat Within Members</h4>
          </div>
          <div className='basis-4/6 bg-slate-200'>
            <UserMessage type='sender' msg={'Hope You are doing well..Hope You are doing well..Hope You are doing well..Hope You are doing well..Hope You are doing well..Hope You are doing well..'} name={'JS'}/>
            <UserMessage type='receiver' msg={"I am good"} name={'RC'}/>
          </div>
          <div className='basis-1/6 mx-4 flex justify-between items-center'>
            <textarea cols={40} placeholder='Type a reply...' className='resize-none outline-none'></textarea>
            <div className='flex gap-4'>
              <BsEmojiSmile />
              <FaUpload />
            </div>
          </div>
    </div>
  )
}
