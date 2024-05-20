import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toaster from "../Toaster/Toaster";
import "./Login.css"; // Import the custom CSS

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
      setError(""); 
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000); 
    } else {
      setError("Incorrect username or password");
      setSuccess(""); 
  
      setTimeout(() => setError(""), 1000); // Changed 100 to 1000 for better visibility
    }
  };

  return (
    <div className="login-container flex justify-center items-center">
      <div className="flex justify-end items-center h-full w-full max-w-5xl p-4 sm:p-8">
        <div className="w-full sm:w-1/2 lg:w-3/5 bg-white flex justify-center items-center border border-black rounded-tl-3xl rounded-br-3xl p-8 sm:p-10 lg:p-16 card">
          <div className="w-full">
            <div className="flex flex-col gap-8">
              <div className="flex justify-center items-center">
                <img src="/vidyalogo2.png" className="h-24 sm:h-28 lg:h-32" alt="Logo" />
              </div>
              <div className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold">
                Welcome To <span className="text-orange-700">Calibration</span> Management System
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full py-2 px-3 border border-black rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 px-3 border border-black rounded-md"
                />
              </div>
              <div>
                <button
                  className="bg-orange-600 hover:bg-orange-700 py-2 w-full rounded-md text-white"
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
