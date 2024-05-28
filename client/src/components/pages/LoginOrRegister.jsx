import loginImg from "../assets/images/loginImg.png";

import { useState } from "react";
import Login from "../commonComponents/Login";
import Register from "../commonComponents/Register";
const LoginOrRegister = () => {
  const [isLoginBtn,setIsLoginBtn] = useState(true);
  const [userDetails,setUserDetails] = useState({
    fullName:'',
    userName:'',
    password:'',
  });
  return (
    <div className="bg-[#1E1E1E] h-fit md:h-[100vh] flex">
      <div className="h-[90%] md:h-[80%] w-[90%] md:w-[80%] bg-[#FFFFFF] m-auto rounded-3xl p-[34px] flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 mt-4 md:mt-0">
        <div className="flex justify-end gap-4 w-[90%]">
          <button onClick={()=>setIsLoginBtn(!isLoginBtn)} className={`bg-[${isLoginBtn ? '#1E1E1E' : null}] px-4 py-2 ${isLoginBtn ? 'text-white' : 'text-black'} rounded-lg`}>Login</button>
          <button onClick={()=>setIsLoginBtn(!isLoginBtn)} className={`bg-[${!isLoginBtn ? '#1E1E1E' : null}] px-4 py-2 ${!isLoginBtn ? 'text-white' : 'text-black'} rounded-lg`}>Register</button>
        </div>
          {isLoginBtn ? <Login userDetails={userDetails} setUserDetails={setUserDetails}/>: <Register userDetails={userDetails} setUserDetails={setUserDetails}/>}
        </div>
        <img src={loginImg} alt="login" className="w-[70%] md:w-1/2 h-full object-cover rounded-3xl"/>
      </div>
    </div>
  );
};

export default LoginOrRegister;