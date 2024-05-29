import { RoomMembers } from '../commonComponents/RoomMembers'
import { ChatApp } from '../commonComponents/ChatApp';
import { Notepad } from '../commonComponents/Notepad';
const Home = () => {
  return (
    <div className='flex h-[100vh] bg-[#1E1E1E] p-10 gap-4'>
      <div className='basis-1/4'>
        {/* Members list */}
        <div className='bg-white min-h-[30%] max-h-[50%] w-[80%] rounded-lg overflow-y-scroll'>
          {/* heading */}
          <h3 className='text-gray-700 text-xl font-bold text-center '>Room Members</h3>
          {/* Members list */}
          <RoomMembers name={'Jitesh Sharma'} active={false}/>
          <RoomMembers name={'Jitesh Sharma'} active={true}/>
          <RoomMembers name={'Jitesh Sharma'} active={false}/>
          <RoomMembers name={'Jitesh Sharma'} active={false}/>
        </div>
      </div>
      {/* Notepad Editor */}
      <div className='basis-2/4 bg-white'>
        <Notepad />
      </div>
      {/* Chat Application */}
      <ChatApp />
    </div>
  )
}

export default Home