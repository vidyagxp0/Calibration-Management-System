import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";

const ScheduleCreation = () => {
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
    <Box sx={{ width: { xs: "90vw", sm: "600px", md: "700px" } }}>
      <div role="presentation">
        <div className="flex justify-between p-2 border border-gray-500">
          <div className="font-medium">Schedule Master</div>
          <div
            className="cursor-pointer hover:text-red-700"
            onClick={toggleDrawer(false)}
          >
            X
          </div>
        </div>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col py-3">
            <label className="text-[14px] font-medium pb-2">
              Instrument Id
            </label>
            <select className="p-[10px] text-center border border-gray-500">
              <option>Select Instrument Id </option>
              <option>M001</option>
              <option>M002</option>
              <option>M003</option>
            </select>
          </div>
          <div className="flex flex-col py-3">
            <label className="text-[14px] font-medium pb-2">
              Schedule Type
            </label>
            <select className="p-[10px] text-center border border-gray-500">
              <option>Select Schedule Type</option>
              <option>Calibration</option>
            </select>
          </div>
          <div className="flex flex-col py-3">
            <label className="text-[14px] font-medium pb-2">
              Frequency Type
            </label>
            <select className="p-[10px] text-center border border-gray-500">
              <option>Select Frequency Type</option>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Calibration Date</label>
            <input
              type="date"
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Schedule Due Date</label>
            <input
              type="date"
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col py-3">
            <label className="text-[14px] font-medium pb-2">
              Calibration Type
            </label>
            <select className="p-[10px] text-center border border-gray-500">
              <option>Select Calibration Type</option>
              <option>Internal</option>
              <option>External</option>
            </select>
          </div>
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">Before Grace Period</label>
            <input
              type="text"
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">After Grace Period</label>
            <input
              type="text"
              className="border border-gray-500 rounded p-2"
            />
          </div>
        </div>
        <div className="p-2">
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">Remark</label>
            <input
              type="text"
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <button className="bg-green-600 text-white w-full mt-3 py-2">
            Submit
          </button>
        </div>
      </div>
    </Box>
  );

  const data = [
    {
      machineId: "M001",
      scheduleType: "Calibration",
      frequency: "1 Month",
      installationDate: "2022-10-23",
      scheduleDueDate: "2022-10-23",
      department: "Developer",
      calibrationType: "Internal",
      createdBy: "Admin",
      createdDate: "2022-11-23",
      status: "Completed",
    },
    {
      machineId: "M001",
      scheduleType: "Calibration",
      frequency: "1 Month",
      installationDate: "2022-10-23",
      scheduleDueDate: "2022-10-23",
      department: "Developer",
      calibrationType: "Internal",
      createdBy: "Admin",
      createdDate: "2022-11-23",
      status: "Completed",
    },
    {
      machineId: "M001",
      scheduleType: "Calibration",
      frequency: "1 Month",
      installationDate: "2022-10-23",
      scheduleDueDate: "2022-10-23",
      department: "Developer",
      calibrationType: "Internal",
      createdBy: "Admin",
      createdDate: "2022-11-23",
      status: "Completed",
    },
    {
      machineId: "M001",
      scheduleType: "Calibration",
      frequency: "1 Month",
      installationDate: "2022-10-23",
      scheduleDueDate: "2022-10-23",
      department: "Developer",
      calibrationType: "Internal",
      createdBy: "Admin",
      createdDate: "2022-11-23",
      status: "Completed",
    },
    {
      machineId: "M001",
      scheduleType: "Calibration",
      frequency: "1 Month",
      installationDate: "2022-10-23",
      scheduleDueDate: "2022-10-23",
      department: "Developer",
      calibrationType: "Internal",
      createdBy: "Admin",
      createdDate: "2022-11-23",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="px-4 py-3 flex flex-col md:flex-row md:justify-between">
        <div className="text-2xl font-semibold">Schedule Creation Master</div>
        <div className="flex gap-2 items-center mt-3 md:mt-0">
          <select className="p-2 mb- sm:mb-0 sm:mr-3">
            <option>Select</option>
            <option>Completed</option>
            <option>SendBack</option>
          </select>
          <button
            className="p-2 bg-blue-600 text-white"
            onClick={toggleDrawer(true)}
          >
            Add New Instrument
          </button>
        </div>
      </div>

      <div className="p-2 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>MACHINE ID</th>
              <th>SCHEDULE TYPE</th>
              <th>FREQUENCY</th>
              <th>INSTALLATION DATE</th>
              <th>SCHEDULE DUEDATE</th>
              <th>DEPARTMENT</th>
              <th>CALIBRATION TYPE</th>
              <th>CREATED BY</th>
              <th>CREATED DATE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((itm, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{itm.machineId}</td>
                <td>{itm.scheduleType}</td>
                <td>{itm.frequency}</td>
                <td>{itm.installationDate}</td>
                <td>{itm.scheduleDueDate}</td>
                <td>{itm.department}</td>
                <td>{itm.calibrationType}</td>
                <td>{itm.createdBy}</td>
                <td>{itm.createdDate}</td>
                <td>{itm.status}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      className="p-1 bg-red-500 text-white"
                      onClick={() => alert("Are You Want To Block")}
                    >
                      Block
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </div>
  );
};

export default ScheduleCreation;
