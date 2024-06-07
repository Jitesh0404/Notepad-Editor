import { RoomMembers } from '../commonComponents/RoomMembers'
import { ChatApp } from '../commonComponents/ChatApp';
import { Notepad } from '../commonComponents/Notepad';
import { MdGroups } from "react-icons/md";
import InviteMember from '../commonComponents/InviteMember';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ToastMessage from '../commonComponents/ToastMessage';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import {io} from 'socket.io-client';
const Home = () => {
  const user = useSelector(state=>state.user.user);
  const [isInviteModalOpen,setIsInviteModalOpen] = useState(false);
  const [membersList,setMembersList] = useState([]);
  console.log("Members listMembers : ",membersList);
  const getListMembers = async()=>{
    try {
      const response  = await fetch(`http://localhost:4000/api/members/listMembers?userName=${user.userName}`,{
        method:'GET',
        credentials:'include'
      });
      const data = await response.json();
      if(data.success){
        setMembersList(data.data);
        return;
      }
      ToastMessage({message:data.message,type:'error'});
    } catch (error) {
      console.log("Error in listMembers : ",error);
      ToastMessage({ message: data.message, type: "error" });
    }
  }
  useEffect(()=>{
    // socket connection
    const socket = io('http://localhost:4000',{withCredentials:true,transports:['websocket']});
    socket.on('connect', function() {
      console.log('Connected to the server');
    });
    
    socket.on('disconnect', function() {
      console.log('Disconnected from the server');
    });
    console.log("Socket : ",socket);
  },[])
  useEffect(() => {
    getListMembers();
  },[])
  return (
    <div className='flex h-[100vh] bg-[#1E1E1E] p-10 gap-4'>
      <div className='basis-1/4'>
        {/* Members list */}
        <div className='bg-white min-h-[30%] max-h-[50%] w-[80%] rounded-lg overflow-y-scroll relative flex flex-col justify-between'>
          <div>
            {/* heading */}
            <h3 className='text-gray-700 text-xl font-bold text-center '>Room Members</h3>
            {/* Members list */}
            {
              membersList.map((member,index)=>(
                <RoomMembers key={index} name={member.members.toUpperCase()} active={false}/>         
              ))
            }
          </div>
          <button onClick={()=>setIsInviteModalOpen(true)} className='sticky bottom-0 w-full bg-[#1E1E1E] flex justify-center items-center gap-2 p-2 rounded-lg cursor-pointer mt-10'>
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
      {isInviteModalOpen && <InviteMember setIsInviteModalOpen={setIsInviteModalOpen} getListMembers={getListMembers}/>}
      <ToastContainer />
    </div>
  )
}

export default Home