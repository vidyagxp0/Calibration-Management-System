import React, { useState } from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import { Box, Drawer } from "@mui/material";

const FunctionLocation = () => {
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
    <Box sx={{ width: "500px" }}>
      <div role="presentation">
        <div className="flex justify-between p-2 border border-gray-500">
          <div className="font-medium">Function Location</div>
          <div
            className=" cursor-pointer hover:text-red-700"
            onClick={toggleDrawer(false)}
          >
            X
          </div>
        </div>
        <div className="p-2">
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">Code</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">Name</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">Description</label>
            <input
              type="text"
              placeholder=""
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
  return (
    <div className="bg-orange-100 h-[100vh]">
      <Header />
      <div className="px-4 py-3 flex justify-between">
        <div className="text-[24px] font-semibold">
          {" "}
          Function Location Master
        </div>
        <div>
          <button
            className="p-2 bg-blue-600 text-white"
            onClick={toggleDrawer(true)}
          >
            Add New Function Location
          </button>
        </div>
      </div>

      <div className="py-2">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>CODE</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>FL001</td>
              <td>Function RD</td>
              <td>Test Location</td>
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

export default FunctionLocation;
