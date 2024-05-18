
// ToastNotification.js
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = ({ error,success }) => {
    useEffect(() => {
        if (error) {
          toast.error(error);
        }
        if (success) {
          toast.success(success);
        }
      }, [error, success]);
    
      return <ToastContainer />;
    };
export default Toaster;
