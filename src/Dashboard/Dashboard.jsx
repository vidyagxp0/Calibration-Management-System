import React, { useState } from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import MyLineChart from "../Chart/MyLineChart";
import MyCalendar from "../Calender/MyCalender";
import { Box, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(newOpen);
  };

  const DrawerList = () => (
    <Box sx={{ width: { xs: "90vw", sm: "60vw", md: "60vw", lg: "60vw" } }}>
      <div role="presentation">
        <div className="flex justify-between p-2 border border-gray-500">
          <div className="text-sm md:text-lg lg:text-xl font-semibold">
            INSTRUMENT UNDER REVIEWER / APPROVER
          </div>
          <div
            className="cursor-pointer hover:text-red-700"
            onClick={toggleDrawer(false)}
          >
            X
          </div>
        </div>
        <div className="p-2 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">S.No</th>
                <th className="px-4 py-2 border border-gray-300">MACHINE ID</th>
                <th className="px-4 py-2 border border-gray-300">
                  MACHINE NAME
                </th>
                <th className="px-4 py-2 border border-gray-300">LOCATION</th>
                <th className="px-4 py-2 border border-gray-300">DEPARTMENT</th>
                <th className="px-4 py-2 border border-gray-300">WORKFLOW</th>
                <th className="px-4 py-2 border border-gray-300">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">1</td>
                <td className="px-4 py-2 border border-gray-300">M008</td>
                <td className="px-4 py-2 border border-gray-300">
                  Test Machine 08
                </td>
                <td className="px-4 py-2 border border-gray-300">Warehouse</td>
                <td className="px-4 py-2 border border-gray-300">Developer</td>
                <td className="px-4 py-2 border border-gray-300">
                  WorkFlow 02
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex gap-2">
                    <button className="bg-indigo-500 text-white px-2 py-1 rounded">
                      Approve
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="bg-gray-100 header">
      <Header />

      <div className="px-5 flex flex-col sm:flex-row justify-between border-b border-gray-800 pb-2">
        <div className="mb-2 sm:mb-0">
          <div className="text-xl sm:text-2xl font-bold">Hi, welcome back!</div>
          <div className="text-sm sm:text-base font-medium">
            Your schedule management dashboard.
          </div>
        </div>
        <div>
          <div className="text-xs sm:text-sm text-gray-600 font-medium">
            TODAY
          </div>
          <div className="text-lg sm:text-xl font-medium">Wed, 15 May 2024</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="col-span-1 lg:col-span-2 bg-white drop-shadow-md p-4">
          <div className="w-full overflow-x-auto">
            <MyLineChart />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 cursor-pointer"
            onClick={toggleDrawer(true)}
          >
            <div className="text-2xl text-white">1</div>
            <div className="text-sm text-white">INSTRUMENT UNDER REVIEWER</div>
          </div>
          <div
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 cursor-pointer"
            onClick={toggleDrawer(true)}
          >
            <div className="text-2xl text-white">0</div>
            <div className="text-sm text-white">INSTRUMENT UNDER APPROVER</div>
          </div>
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 cursor-pointer"
            onClick={toggleDrawer(true)}
          >
            <div className="text-2xl text-white">1</div>
            <div className="text-sm text-white">SCHEDULE UNDER REVIEWER</div>
          </div>
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 cursor-pointer"
            onClick={toggleDrawer(true)}
          >
            <div className="text-2xl text-white">0</div>
            <div className="text-sm text-white">SCHEDULE UNDER APPROVER</div>
          </div>
          <div
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 cursor-pointer col-span-1 sm:col-span-2"
            onClick={() => navigate("/schedule-under-execution")}
          >
            <div className="text-2xl text-white">6</div>
            <div className="text-sm text-white">SCHEDULE UNDER EXECUTION</div>
          </div>
          <div
            className="bg-gradient-to-r from-indigo-500 to-green-400 p-3 cursor-pointer"
            onClick={() => navigate("/execution-under-reviewer")}
          >
            <div className="text-2xl text-white">1</div>
            <div className="text-sm text-white">EXECUTION UNDER REVIEWER</div>
          </div>
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 cursor-pointer"
            onClick={() => navigate("/execution-under-approver")}
          >
            <div className="text-2xl text-white">0</div>
            <div className="text-sm text-white">EXECUTION UNDER APPROVER</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="col-span-1 lg:col-span-2 bg-white drop-shadow-md p-4">
          <div className="w-full overflow-x-auto">
            <MyLineChart chartType="bar" />
          </div>
        </div>
        <div className="bg-white p-4 drop-shadow-md">
          <MyCalendar/>
        </div>
      </div>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </div>
  );
};

export default Dashboard;
