import React from "react";
import { ButtonWithIcon } from "./Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const OtherLoginOrRegister = () => {
  return (
    <div className="mt-6 flex flex-col gap-4">
    <ButtonWithIcon
      Icon={FcGoogle}
      text="Google"
      bgColor={"#F0EDFF"}
    />
    <ButtonWithIcon
      Icon={FaFacebook}
      IconClr={"blue"}
      text="Facebook"
      bgColor={"#F0EDFF"}
    />
  </div>
  );
};

export default OtherLoginOrRegister;
