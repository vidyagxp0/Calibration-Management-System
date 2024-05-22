import React from "react";
import Header from "../Header/Header";
import "./Dashboard.css";

const ExecutionUnderApprover = () => {
  return (
    <div className="bg-gray-100 header">
      <Header />
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
                <th className="px-4 py-2">SCHEDULE DUEDATE</th>
                <th className="px-4 py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Mac-02</td>
                <td className="px-4 py-2">Calibration</td>
                <td className="px-4 py-2">1 Month</td>
                <td className="px-4 py-2">2023-07-19</td>
                <td className="px-4 py-2">2023-08-21</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button className="bg-green-500 text-white p-1">
                      View Certificate
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

export default ExecutionUnderApprover;
