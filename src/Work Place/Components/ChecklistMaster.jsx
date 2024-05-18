import React from "react";
import Header from "../../Header/Header";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
const ChecklistMaster = () => {
  return (
    <div className="bg-gray-100 h-[100vh]">
      <Header />
      <div className="flex justify-between border border-b-gray-400  p-2">
        <div className="text-[24px] font-semibold">CheckList Master</div>
        <div className="text-[24px] font-semibold">Action Area</div>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-5">
          <div className="col-span-3 p-2">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>CHECKLIST ID</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>TEMP01</td>
                  <td>Test CheckList 2</td>
                  <td>
                    <div className="flex gap-4">
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
          <div className="col-span-2 border border-l-gray-400 p-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col py-3">
                <label className="text-[14px] font-medium pb-2">
                  CheckList Id
                </label>
                <input className="border border-gray-500 rounded p-2 " />
              </div>
              <div className="flex flex-col py-3">
                <label className="text-[14px] font-medium pb-2">
                  Description
                </label>
                <input className="border border-gray-500 rounded p-2 " />
              </div>
              <div className="flex flex-col py-3">
                <label className="text-[14px] font-medium pb-2">Type</label>
                <select className="p-[10px] text-center">
                  <option>Creator</option>
                  <option>Approver</option>
                  <option>Reviewver</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border border-b-gray-400 pb-3">
              <div className="flex flex-col py-3">
                <label className="text-[14px] font-medium pb-2">
                  Applied Pressure:s
                </label>
                <input className="border border-gray-500 rounded p-2 " />
              </div>
              <div className="pt-[42px]">
                <button className="p-2 bg-gray-600 w-full">Add</button>
              </div>
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>APPLIEDPRESSURE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>25</td>
                    <td><div className="p-2 bg-red-500 w-[40px] text-white"><CloseSharpIcon/></div></td>
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
