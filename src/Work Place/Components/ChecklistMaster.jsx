import React from "react";
import Header from "../../Header/Header";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const ChecklistMaster = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-400 p-2">
        <div className="text-2xl font-semibold">CheckList Master</div>
        <div className="text-2xl font-semibold">Action Area</div>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 p-2">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">S.No.</th>
                  <th className="text-left">CHECKLIST ID</th>
                  <th className="text-left">DESCRIPTION</th>
                  <th className="text-left">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>TEMP01</td>
                  <td>Test CheckList 2</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="p-1 bg-yellow-500 text-white">
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
          <div className="md:col-span-2 border-l border-gray-400 p-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col py-3">
                <label className="text-sm font-medium pb-2">CheckList Id</label>
                <input className="border border-gray-500 rounded p-2" />
              </div>
              <div className="flex flex-col py-3">
                <label className="text-sm font-medium pb-2">Description</label>
                <input className="border border-gray-500 rounded p-2" />
              </div>
              <div className="flex flex-col py-3">
                <label className="text-sm font-medium pb-2">Type</label>
                <select className="border border-gray-500 rounded p-2">
                  <option>Creator</option>
                  <option>Approver</option>
                  <option>Reviewer</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-3">
              <div className="flex flex-col py-3">
                <label className="text-sm font-medium pb-2">Applied Pressure</label>
                <input className="border border-gray-500 rounded p-2" />
              </div>
              <div className="mt-[28px]  md:pt-3">
                <button className="p-2  bg-gray-600 text-white w-full">Add</button>
              </div>
            </div>
            <div className="mt-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left">S.No.</th>
                    <th className="text-left">APPLIED PRESSURE</th>
                    <th className="text-left">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>25</td>
                    <td>
                      <div className="p-2 bg-red-500 w-10 text-white flex justify-center">
                        <CloseSharpIcon />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="bg-green-600 text-white w-full mt-3 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistMaster;
