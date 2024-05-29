import React from "react";

const UserMessage = ({type,msg,name}) => {
  return (
    <div className={`mt-4 mx-2 flex ${type==='sender' ? 'justify-end' : 'justify-start'} gap-2 items-center`}>
      <div className={`max-w-[80%] flex items-center gap-2 ${type==='sender' ? 'flex-row' : 'flex-row-reverse'} items-center`}>
        <span className="bg-[#3047EC] text-white p-2 rounded">{msg}</span>
        <p className="text-[#000]">{name}</p>
      </div>
    </div>
  );
};

export default UserMessage;
