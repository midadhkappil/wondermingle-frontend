import React from "react";

import LoginBg from "resources/images/login-bg.jpeg";

const Auth = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-screen md:w-2/3 py-8 mx-auto">
        <div className="hidden md:block my-10 h-full bg-no-repeat">
          <img
            draggable="false"
            className="mr-[80px] mt-[1.8rem] ml-[155px]"
            src={LoginBg}
            alt="homepage"
            style={{ maxHeight: "100vh" }}
          />
        </div>

        <div className="flex flex-col gap-3 w-full md:w-2/5">{children}</div>
      </div>
    </div>
  );
};

export default Auth;
