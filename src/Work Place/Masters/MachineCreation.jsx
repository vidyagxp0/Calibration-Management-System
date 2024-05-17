import { Box, Drawer } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';

const MachineCreation = () => {
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
      <Box sx={{ width: "900px" }}>
        <div role="presentation">
          <div className="flex justify-between p-2 border border-gray-500">
            <div className="font-medium">Assets Master</div>
            <div
              className=" cursor-pointer hover:text-red-700"
              onClick={toggleDrawer(false)}
            >
              X
            </div>
          </div>
          <div className="p-2 grid grid-cols-3 gap-4"><div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Assets Id</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Assets Name</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>

            <div className="flex flex-col pt-[22px]">
              <label className="text-[14px] font-medium pb-2">
              Assets Department
              </label>
              <select className="p-[9px] text-center border border-gray-500 rounded">
                <option>Select Assets Department </option>
                <option>Developer</option>
                <option>RC Update</option>
                <option>Sales</option>
              </select>
            </div>
            <div className="flex flex-col pt-[22px]">
              <label className="text-[14px] font-medium pb-2">
              AssetsFunctional Location
              </label>
              <select className="p-[10px] text-center border border-gray-500 rounded">
                <option>Select AssetsFunctional Location</option>
                <option>Function RD</option>
                <option>Function Test Update</option>
              </select>
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Assets Location</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-[22px]">
              <label className="text-[14px] font-medium pb-2">    
Assets Workflow
              </label>
              <select className="p-[10px] text-center border border-gray-500 rounded">
                <option>Select Assets Workflow</option>
                <option>WorkFlow 01</option>
                <option>WorkFlow 02</option>
                <option>WorkFlow 03</option>
              </select>
            </div>

            <div className="flex flex-col pt-[10px]">
              <label className="text-[14px] font-medium pb-2">    
Checklist
              </label>
              <select className="p-[10px] text-center border border-gray-500 rounded">
                <option>Select Checklist</option>
                <option>Checklist 01</option>
                <option>Checklist 02</option>
                <option>Checklist 03</option>
              </select>
            </div>
            <div className="flex flex-col  gap-3">
              <label className="font-medium">Range </label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col  gap-3">
              <label className="font-medium">Accuracy</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
          
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Make</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Type</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Temprature</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Relative Humadity</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>  <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">IS Strandard</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>  <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Remark</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
          </div>
          <div className="p-2">
        
            <button className="bg-green-600 text-white w-full mt-3 py-2">
              Submit
            </button>
          </div>
        </div>
      </Box>
    );
    const data = [
      {
        assetsId: "M001",
        assetsName: "Calibration",
        assetLocation: "Test Location",
        assetsDepartment: "2022-10-23",
        assetsVersion: "2022-10-23",
        department: "Developer",
        calibrationType: "Internal",
        createdBy: "Admin",
        createdDate: "2022-11-23",
        status: "Completed",
      },
      {
        assetsId: "M002",
        assetsName: "Calibration",
        assetLocation: "Test Location",
        assetsDepartment: "2022-10-23",
        assetsVersion: "2022-10-23",
        department: "Developer",
        calibrationType: "Internal",
        createdBy: "Admin",
        createdDate: "2022-11-23",
        status: "Completed",
      },
      {
        assetsId: "M003",
        assetsName: "Calibration",
        assetLocation: "Test Location",
        assetsDepartment: "2022-10-23",
        assetsVersion: "2022-10-23",
        department: "Developer",
        calibrationType: "Internal",
        createdBy: "Admin",
        createdDate: "2022-11-23",
        status: "Completed",
      },
      {
        assetsId: "M004",
        assetsName: "Calibration",
        assetLocation: "Test Location",
        assetsDepartment: "2022-10-23",
        assetsVersion: "2022-10-23",
        department: "Developer",
        calibrationType: "Internal",
        createdBy: "Admin",
        createdDate: "2022-11-23",
        status: "Completed",
      },
      {
        assetsId: "M005",
        assetsName: "Calibration",
        assetLocation: "Test Location",
        assetsDepartment: "2022-10-23",
        assetsVersion: "2022-10-23",
     
        createdBy: "Admin",
        createdDate: "2022-11-23",
        status: "Completed",
      },
    ];
  return (
    <div className="bg-gray-200">
    <Header />
    <div className="px-4 py-3 flex justify-between">
      <div className="text-[24px] font-semibold">
        {" "}
        Assets Master
      </div>
      <div>
        <select className="p-[10px] mr-3">
          <option>Select Status</option>
          <option>Active</option>
          <option>InActive</option>
          <option>Breakdown</option>
        </select>
        <button
          className="p-2 bg-blue-600 text-white"
          onClick={toggleDrawer(true)}
        >
          Add New Assets
        </button>
      </div>
    </div>

    <div className="p-2">
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>ASSETS ID</th>
            <th>ASSETS NAME</th>
            <th>ASSETS LOCATION</th>
            <th>ASSETS DEPARTMENT</th>
            <th>ASSETS VERSION</th>
            <th>CREATED BY</th>
            <th>CREATED DATE </th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((itm, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{itm.assetsId}</td>
                <td>{itm.assetsName}</td>
                <td>{itm.assetLocation}</td>              
                <td>{itm.assetsDepartment}</td>
                <td>{itm.assetsVersion}</td>
                <td>{itm.createdBy}</td>
                <td>{itm.createdDate}</td>
                <td>{itm.status}</td>
                <td>
                  {" "}
                  <div className="flex gap-2">
                    <button className='p-1 bg-yellow-500 text-white'>Edit</button>
                    <button
                      className="p-1 bg-red-500 text-white"
                      onClick={() => alert("Are You Want To Block")}
                    >
                      Block
                    </button>
                    <button className='p-1 bg-yellow-500 text-white'>History</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      className=""
    >
      <DrawerList />
    </Drawer>
  </div>
  )
}

export default MachineCreation
