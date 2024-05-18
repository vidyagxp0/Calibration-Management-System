import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container h-full  ">
      <div className="flex gap-2 justify-end items-center h-full pr-[160px]">
        <div className="h-[580px] w-[580px] bg-white flex justify-center items-center border border-black rounded-tl-3xl rounded-br-3xl card ">
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex justify-center items-center">
                <img src="/vidyalogo2.png" className="h-[100px] w-[300px]" />
              </div>
              <div className="text-[26px] font-semibold">
                Welcome To <span className="text-orange-700">Calibration</span>{" "}
                Management System
              </div>
              <div className="flex flex-col">
                <label>
                  <b>User Name</b>
                </label>
                <input className="w-full py-3 px-2 border border-black rounded-md" />
              </div>
              <div className="flex flex-col">
                <label>
                  <b>Password</b>
                </label>
                <input className="w-full py-3 px-2 border border-black rounded-md" />
              </div>
              <div>
                <button
                  className="bg-[#e69743] py-2 w-full rounded-md text-white"
                  onClick={(e) => navigate("/dashboard")}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
