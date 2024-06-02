import { useState } from "react";
import { MdGroups } from "react-icons/md";
import { useSelector } from "react-redux";
import ToastMessage from "./ToastMessage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdCloseCircle } from "react-icons/io";

const InviteMember = ({ setIsInviteModalOpen }) => {
  const user = useSelector((state) => state.user.user);
  const [memberName, setMemberName] = useState("");
  const handleInviteMember = async () => {
    if (!memberName) {
      ToastMessage({ message: "Please provide member name", type: "error" });
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:3001/api/members/addMember",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            userName: user.userName,
            members: memberName,
          }),
        }
      );
      const data = await response.json();
      if (data.success) {
        ToastMessage({
          message: data.message,
          type:
            data.message === "Member added successfully." ? "success" : "error",
        });
        setMemberName("");
        return;
      }
      ToastMessage({ message: data.message, type: "error" });
      console.log("Data from addMember is : ", data);
    } catch (error) {}
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
      <div className="bg-white rounded-lg flex flex-col gap-4 px-4 py-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center justify-center ">
            <MdGroups size={30} color={"black"} />
            <h4 className="text-black text-lg">Invite Members</h4>
          </div>
          <button onClick={()=>setIsInviteModalOpen(false)}><IoMdCloseCircle color="black" size={30}/></button>
        </div>
        <div className="p-4 flex flex-col">
          <input
            type="text"
            placeholder="Enter UserId"
            className="bg-white text-black p-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
          />
          <button
            onClick={handleInviteMember}
            className="bg-blue-700 w-fit m-auto py-2 px-4 rounded-lg text-white mt-4"
            type="button"
          >
            Invite
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InviteMember;
