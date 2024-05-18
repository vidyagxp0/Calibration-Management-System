import React, { useState } from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import { Box, Drawer } from "@mui/material";

const Employee = () => {
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
        <div className="flex justify-between p-4 border border-gray-500">
          <div className="text-[18px] font-semibold">Employee Master</div>
          <div
            className=" cursor-pointer hover:text-red-700"
            onClick={toggleDrawer(false)}
          >
            X
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Employee No</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Employee Name</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium"> Email</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Contact </label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
          </div>
          <div className="py-4 flex flex-col gap-4">
            <label className="font-medium">Employee Picture </label>
            <input
              type="file"
              className="border border-gray-500 rounded p-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium"> Department</label>
              <select className="border border-gray-500 rounded p-2">
                <option>Developer</option>
                <option>RC Updates</option>
                <option> sales</option>
                <option> Marketing</option>
              </select>
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Designation </label>
              <select className="border border-gray-500 rounded p-2">
                <option>Sales Executive</option>
                <option> Sales Executive</option>
              </select>
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium"> AccessRole</label>
              <select className="border border-gray-500 rounded p-2">
                <option>Admin</option>
                <option>Admin Group</option>
                <option>End User</option>
                <option>MAnager </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">UserName </label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium"> Password</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">Address </label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-500 rounded p-2"
              />
            </div>
          </div>
          <div className="py-3">
            <button className="bg-green-600 text-white w-full mt-3 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
  return (
    <div className=" bg-gray-100">
      <Header />
      <div className="px-4 py-3">
        <div className="flex justify-between">
          <div className="text-[20px] font-semibold">Employee Master</div>
          <div>
            <button
              className="p-2 bg-blue-600 text-white"
              onClick={toggleDrawer(true)}
            >
              Add New Member
            </button>
          </div>
        </div>
        <div className="py-3">
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>EMPLOYEE ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CONTACT</th>
                <th>DEPARTMENT</th>
                <th>DESIGNATION</th>
                <th>ACCESSROLE</th>
                <th>CREATED BY</th>
                <th>CREATED DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>EMP001</td>
                <td>Admin</td>
                <td>admin@mail.com</td>
                <td>9090897867</td>
                <td>Developer</td>
                <td>Developer Designation 1</td>
                <td>AdminGroup</td>
                <td>Admin</td>
                <td>17-10-2022</td>
                <td>
                  {" "}
                  <div className="flex gap-4">
                    <button
                      className="p-1 bg-yellow-500 text-white"
                      onClick={toggleDrawer(true)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-1 bg-red-500 text-white"
                      onClick={() => alert("Are You Want To Delete")}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
  );
};

export default Employee;
