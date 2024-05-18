import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Toaster from "../Toaster/Toaster";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = () => {
    if (
      (username === "Pankaj" && password === "Pankaj") ||
      (username === "Admin.vidyagxp.com" && password === "vidyagxp")
    ) {
      setSuccess("Login successful");
      setError(""); // Clear any previous error
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000); // Adjust delay as needed
    } else {
      setError("Incorrect username or password");
      setSuccess(""); // Clear any previous success message
      // Reset error after a short delay to allow re-triggering
      setTimeout(() => setError(""), 100);
    }
  };

  return (
    <div className="login-container h-full">
      <div className="flex gap-2 justify-end items-center h-full pr-[160px]">
        <div className="h-[580px] w-[580px] bg-white flex justify-center items-center border border-black rounded-tl-3xl rounded-br-3xl card">
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex justify-center items-center">
                <img src="/vidyalogo2.png" className="h-[100px] w-[300px]" alt="Logo" />
              </div>
              <div className="text-[26px] font-semibold">
                Welcome To <span className="text-orange-700">Calibration</span> Management System
              </div>
              <div className="flex flex-col">
                <label>
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full py-3 px-2 border border-black rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label>
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-2 border border-black rounded-md"
                />
              </div>
              <div>
                <button
                  className="bg-[#e69743] py-2 w-full rounded-md text-white"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster error={error} success={success} />
    </div>
  );
};

export default Login;
