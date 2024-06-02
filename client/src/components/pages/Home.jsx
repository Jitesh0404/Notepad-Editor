import { RoomMembers } from '../commonComponents/RoomMembers'
import { ChatApp } from '../commonComponents/ChatApp';
import { Notepad } from '../commonComponents/Notepad';
import { MdGroups } from "react-icons/md";
import InviteMember from '../commonComponents/InviteMember';
import { useState } from 'react';

const Home = () => {
  const [isInviteModalOpen,setIsInviteModalOpen] = useState(false);
  return (
    <div className='flex h-[100vh] bg-[#1E1E1E] p-10 gap-4'>
      <div className='basis-1/4'>
        {/* Members list */}
        <div className='bg-white min-h-[30%] max-h-[50%] w-[80%] rounded-lg overflow-y-scroll relative'>
          {/* heading */}
          <h3 className='text-gray-700 text-xl font-bold text-center '>Room Members</h3>
          {/* Members list */}
          <RoomMembers name={'Jitesh Sharma'} active={false}/>
          <RoomMembers name={'Jitesh Sharma'} active={true}/>
          <RoomMembers name={'Jitesh Sharma'} active={false}/>
          <RoomMembers name={'Jitesh Sharma'} active={false}/>
          <RoomMembers name={'Jitesh Sharma'} active={false}/>
         
          <button onClick={()=>setIsInviteModalOpen(true)} className='sticky bottom-0 w-full bg-[#1E1E1E] flex justify-center items-center gap-2 p-2 rounded-lg cursor-pointer'>
            {/* <ButtonWithIcon Icon={MdGroups} text={'Invite Member'} IconClr={'black'} /> */}
            <MdGroups size={30} color={'gray'} />
            <h4 className='text-white'>Invite Members</h4>
          </button>
        </div>
      </div>
      {/* Notepad Editor */}
      <div className='basis-2/4 bg-white'>
        <Notepad />
      </div>
      {/* Chat Application */}
      <ChatApp />
      
      {/* Invite Modal */}
      {isInviteModalOpen && <InviteMember setIsInviteModalOpen={setIsInviteModalOpen}/>}
    </div>
  )
}

export default Home