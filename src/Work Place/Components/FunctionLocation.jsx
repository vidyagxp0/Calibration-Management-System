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
    <Box sx={{ width: { xs: "100%", sm: "500px" } }}>
      <div role="presentation">
        <div className="flex justify-between p-2 border-b border-gray-500">
          <div className="font-medium">Function Location</div>
          <div
            className="cursor-pointer hover:text-red-700"
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
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">Name</label>
            <input
              type="text"
              className="border border-gray-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">Description</label>
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="px-4 py-3 flex justify-between">
        <div className="text-2xl font-semibold">
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

      <div className="py-2 px-4 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left">S.No.</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left">CODE</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left">NAME</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left">DESCRIPTION</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">FL001</td>
              <td className="px-4 py-2">Function RD</td>
              <td className="px-4 py-2">Test Location</td>
              <td className="px-4 py-2">
                <div className="flex gap-2 md:gap-4">
                  <button
                    className="p-1 bg-yellow-500 text-white"
                    onClick={toggleDrawer(true)}
                  >
                    Edit
                  </button>
                  <button
                    className="p-1 bg-red-500 text-white"
                    onClick={() => alert("Are You Sure You Want To Delete?")}
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
      >
        <DrawerList />
      </Drawer>
    </div>
  );
};

export default FunctionLocation;
