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
    <Box sx={{ width: "1000px" }}>
      <div role="presentation">
        <div className="flex justify-between p-2 border border-gray-500">
          <div>INSTRUMENT UNDER REVIEWER / APPROVER</div>
          <div
            className=" cursor-pointer hover:text-red-700"
            onClick={toggleDrawer(false)}
          >
            X
          </div>
        </div>
        <div className="p-2">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>MACHINE ID</th> <th>MACHINE NAME</th> <th>LOCATION</th>{" "}
                <th>DEPARTMENT</th> <th>WORKFLOW</th>
                <th> ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>M008</td>
                <td>Test Machine 08</td>
                <td>warehouse</td>
                <td>Developer</td>
                <td>WorkFlow 02</td>
                <td>
                  <div className="flex gap-2">
                    <button className="bg-indigo-500 text-white p-1 ">
                      Approve
                    </button>
                    <button className="bg-red-500 p-1 text-white">
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

      <div className="px-5 flex justify-between border border-b-gray-800 pb-2 ">
        <div className="">
          <div className="text-[22px] font-bold"> Hi, welcome back!</div>{" "}
          <div className="text-[14px] font-medium">
            Your schedule management dashboard.
          </div>
        </div>
        <div className="">
          <div className="text-[12px] text-gray-600 font-medium">TODAY</div>
          <div className="text-[18px] font-medium">Wed, 15 May 2024</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="col-span-2 bg-white drop-shadow-[0_15px_15px_rgba(80,75,69,1)]">
          <MyLineChart />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3"
            onClick={toggleDrawer(true)}
          >
            <div className="text-[24px] text-white">1</div>
            <div className="text-[14px] text-white">
              {" "}
              INSTRUMENT UNDER REVIEWER
            </div>
          </div>
          <div
            onClick={toggleDrawer(true)}
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3"
          >
            <div className="text-[24px] text-white">0</div>
            <div className="text-[14px] text-white">
              INSTRUMENT UNDER APPROVER
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
            onClick={toggleDrawer(true)}
          >
            <div className="text-[24px] text-white">1</div>
            <div className="text-[14px] text-white">
              SCHEDULE UNDER REVIEWER
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
            onClick={toggleDrawer(true)}
          >
            <div className="text-[24px] text-white">0</div>
            <div className="text-[14px] text-white">
              {" "}
              SCHEDULE UNDER APPROVER
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% col-start-1 col-end-3 p-3"
            onClick={() => navigate("/schedule-under-executon")}
          >
            <div className="text-[24px] text-white">6</div>{" "}
            <div className="text-[14px] text-white">
              SCHEDULE UNDER EXECUTION
            </div>{" "}
          </div>
          <div
            className="bg-gradient-to-r from-indigo-500 to-green-400 p-3 "
            onClick={() => navigate("/execution-under-reviewer")}
          >
            <div className="text-[24px] text-white">1</div>
            <div className="text-[14px] text-white">
              EXECUTION UNDER REVIEWER
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
            onClick={() => navigate("/schedule-under-executon")}
          >
            <div className="text-[24px] text-white">0</div>
            <div className="text-[14px] text-white">
              {" "}
              EXECUTION UNDER APPROVER
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 ">
        <div className="col-span-2 bg-white drop-shadow-[0_15px_15px_rgba(80,75,69,1)]">
          <MyLineChart chartType="bar" />
        </div>
        <div className="bg-white p-2 drop-shadow-[0_15px_15px_rgba(80,75,69,1)]">
          <MyCalendar />
        </div>
      </div>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        className=""
      >
        <DrawerList />
      </Drawer>
    </div>
  );
};

export default Dashboard;
