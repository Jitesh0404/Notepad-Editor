import { Button } from "../commonComponents/Button";
import { inputBox } from "../styles/Styles";
import { FiLock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import OtherLoginOrRegister from "./OtherLoginOrRegister";
const Login = ({ userDetails, setUserDetails }) => {
  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };
  return (
    <>
      <div className="w-[100%] md:w-[60%] m-auto flex flex-col gap-4">
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
      </div>
      <div className="w-2/3 md:w-1/2 m-auto relative">
        <OtherLoginOrRegister />
      </div>
    </>
  );
};

export default Login;
