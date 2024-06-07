import { Button } from "../commonComponents/Button";
import { inputBox } from "../styles/Styles";
import { FiLock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import OtherLoginOrRegister from "./OtherLoginOrRegister";
import { updateLoading } from "../../redux/slices/loadingSlice";
import { useDispatch } from "react-redux";
import ToastMessage from "./ToastMessage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/slices/UserSlice";
const Login = ({ userDetails, setUserDetails }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoading(true));
      const response = await fetch("http://localhost:4000/api/user/login", {
        method:'POST', 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
        credentials: "include",
      });
      const data = await response.json();
      console.log("Response from login : ", data);
      if (data.success) {
        ToastMessage({
          message: data.message,
          type:
            data.message === "User Logged In Successfully" ? "success" : "error",
        });
        setUserDetails({
          fullName: "",
          userName: "",
          password: "",
        });
        dispatch(setUserData(data?.userDetails))
        navigation("/home");
        return;
      }
      ToastMessage({ message: data.message, type: "error" });
    } catch (error) {
      console.log("Error in Logging User : ", error);
      ToastMessage({ message: error.message, type: "error" });
    } finally {
      dispatch(updateLoading(false));
    }
  };
  return (
    <>
      <div className="w-[100%] md:w-[60%] m-auto">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col items-center relative">
            <span className="text-[3rem] md:text-[4rem] font-extrabold text-[#1C1C1C]">
              Welcome
            </span>
            <p className="text-sm md:text-lg text-[#1C1C1C] font-semibold relative top-[-10px] md:top-[-20px]">
              We are glad to see you back with us
            </p>
          </div>
          <div className="flex items-center relative justify-center">
            <FiUser color="black" size={24} className="absolute left-4" />
            <input
              id="userName"
              type="text"
              placeholder="Username"
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
          <Button type="submit" text="Login" bgColor={"#1E1E1E"} />
        </form>
      </div>
      <div className="w-2/3 md:w-1/2 m-auto relative">
        <OtherLoginOrRegister />
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
