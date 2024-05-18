import React from "react";
import Header from "../../Header/Header";

const SchedulePlan = () => {
  return (
    <div className="bg-orange-100 h-full">
      <Header />
      <div className="p-2 flex justify-between border border-b-gray-400">
        <div className="text-[20px] font-medium">WorkFlow Master</div>
        <div className="text-[20px] font-medium">Action Area</div>
      </div>
      <div className="grid grid-cols-5 gap-4 p-2">
        <div className="col-span-3">
          <div className="flex justify-between pb-3 border border-b-gray-500">
            <div className="flex gap-3 pb-3">
              <div className="flex flex-col pt-4 gap-3">
                <label className="font-medium">Start Date</label>
                <input
                  type="date"
                  placeholder=""
                  className="border border-gray-500 rounded p-2 w-full"
                />
              </div>
              <div className="flex flex-col pt-4 gap-3">
                <label className="font-medium">End Date</label>
                <input
                  type="date"
                  placeholder=""
                  className="border border-gray-500 rounded p-2 w-full"
                />
              </div>
              <div className="flex flex-col pt-4 gap-3">
                <label className="font-medium">Instrument</label>
                <select className="border border-gray-500 rounded p-[10px] w-full">
                  <option>Select Instrument</option>
                  <option></option>
                </select>
              </div>
            </div>
            <button className="p-2 px-4 bg-blue-600 text-white mt-[58px] rounded">Get</button>
          </div>

          <div className="py-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">S.No.</th>
                  <th className="border p-2">INSTALLATION DATE</th>
                  <th className="border p-2">SCHEDULE DUE DATE</th>
                  <th className="border p-2">FREQUENCY</th>
                  <th className="border p-2">PLAN DATE</th>
                  <th className="border p-2">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">WorkFlow 02</td>
                  <td className="border p-2">Admin</td>
                  <td className="border p-2">07-12-2022</td>
                  <td className="border p-2">true</td>
                  <td className="border p-2">
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
        </div>
        <div className="col-span-2">
          <div className="p-2 border border-l-gray-400">
            <div className="flex justify-between gap-4 border border-b-gray-400 pb-3">
              <div className="flex flex-col pt-4 gap-3">
                <label className="font-medium">Instrument</label>
                <select className="border border-gray-500 rounded p-[10px] w-full">
                    <option>Select Instrument</option>
                </select>
              </div>
              <div >
              <button className="px-3 py-2 bg-gray-500 text-white mt-[55px]">Get</button>
              </div>
            </div>

            <div className="pt-3">
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 bg-white">
                    <tr>
                      <th className="border p-2">S.No.</th>
                      <th className="border p-2">DUE  DATE</th>
                      <th className="border p-2">	PLAN DATE</th>
                      <th className="border p-2">EXTEND PLAN DATE</th>
                      <th className="border p-2">ACTION</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              <button className="bg-green-600 text-white w-full mt-3 py-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePlan;
