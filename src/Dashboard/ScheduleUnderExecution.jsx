import React from "react";
import Header from "../Header/Header";
import "./Dashboard.css";

const ScheduleUnderExecution = () => {
  return (
    <div className="bg-gray-100 header">
      <Header/>
      <div className="p-4">
        <h3>Schedule Execution Master</h3>
        <div className="p-2 overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">S.No</th>
                <th className="px-4 py-2">MACHINE ID</th>
                <th className="px-4 py-2">SCHEDULE TYPE</th>
                <th className="px-4 py-2">FREQUENCY</th>
                <th className="px-4 py-2">INSTALLATION DATE</th>
                <th className="px-4 py-2">PLAN DATE</th>
                <th className="px-4 py-2">SCHEDULE DUEDATE</th>
                <th className="px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">M008</td>
                <td className="px-4 py-2">Test Machine 08</td>
                <td className="px-4 py-2">warehouse</td>
                <td className="px-4 py-2">Developer</td>
                <td className="px-4 py-2">WorkFlow 02</td>
                <td className="px-4 py-2">yes</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button className="bg-indigo-500 text-white p-1">
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
    </div>
  );
};

export default ScheduleUnderExecution;
