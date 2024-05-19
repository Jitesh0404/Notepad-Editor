import { inputBox } from "../styles/Styles";
import { FiLock, FiUser } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { Button } from "./Button";
import OtherLoginOrRegister from "./OtherLoginOrRegister";

const Register = () => {
  return (
    <div className="w-2/3 md:w-1/2 m-auto">
      <form className="flex flex-col gap-4">
        <div className="flex items-center relative justify-center">
          <RxAvatar color="black" size={24} className="absolute left-4" />
          <input
            type="text"
            placeholder="Full Name"
            className={`${inputBox} pl-12`}
          />
        </div>
        <div className="flex items-center relative justify-center">
          <FiUser color="black" size={24} className="absolute left-4" />
          <input
            type="text"
            placeholder="UserName"
            className={`${inputBox} pl-12`}
          />
        </div>
        <div className="flex items-center relative justify-center">
         <FiLock color="black" size={24} className="absolute left-4" />
          <input
            type="password"
            placeholder="Password"
            className={`${inputBox} pl-12`}
          />
        </div>
        <Button type="submit" text="Register" bgColor={"#1E1E1E"} />
      </form>
        <OtherLoginOrRegister />
    </div>
  );
};

export default Register;
