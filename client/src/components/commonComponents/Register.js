import { inputBox } from "../styles/Styles";
import { FiLock, FiUser } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { ButtonWithAction } from "./Button";
import OtherLoginOrRegister from "./OtherLoginOrRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastMessage from "./ToastMessage";
import { useDispatch, useSelector } from "react-redux";
import { updateLoading } from "../../slices/loadingSlice";

const Register = ({ userDetails, setUserDetails }) => {
  // loading reducer
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  console.log("Loading state is : ",loading);
  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoading(true))
      const response = await fetch("http://localhost:3001/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();
      if (data.success) {
        ToastMessage({ message: data.message, type: data.message === 'User Created Successfully.' ? "success" : 'error' });
        setUserDetails({
          fullName: "",
          userName: "",
          password: "",
        });
      }
    } catch (error) {
      console.log("Error in Registering User : ", error);
      ToastMessage({ message: error.message, type:'error' });
    }finally{
      dispatch(updateLoading(false))
    }
  };
  return (
    <>
      <div className="w-2/3 md:w-1/2 m-auto">
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div className="flex items-center relative justify-center">
            <RxAvatar color="black" size={24} className="absolute left-4" />
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              className={`${inputBox} pl-12`}
              value={userDetails.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center relative justify-center">
            <FiUser color="black" size={24} className="absolute left-4" />
            <input
              id="userName"
              type="text"
              placeholder="UserName"
              className={`${inputBox} pl-12`}
              value={userDetails.userName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center relative justify-center">
            <FiLock color="black" size={24} className="absolute left-4" />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`${inputBox} pl-12`}
              value={userDetails.password}
              onChange={handleInputChange}
            />
          </div>
          <ButtonWithAction type="submit" text="Register" bgColor={"#1E1E1E"} disable={loading}/>
        </form>
        <OtherLoginOrRegister />
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
