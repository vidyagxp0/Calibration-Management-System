import React from "react";
import Header from "../Header/Header";
import "./Dashboard.css";

const ScheduleUnderExecution = () => {
  return (
    <div className="bg-gray-100  header">
      <Header />
      <div className="p-4">
        <h3>Schedule Execution Master</h3>
        <div className="p-2">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>MACHINE ID</th> <th>SCHEDULE TYPE</th> <th>FREQUENCY</th>{" "}
                <th>INSTALLATION DATE</th> <th>	PLAN DATE</th>
                <th>SCHEDULE DUEDATE</th>
                <th> ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>M008</td>
                <td>Test Machine 08</td>
                <td>warehouse</td>
                <td>Developer</td>
                <td>WorkFlow 02</td>
                <td>yes</td>
                <td><div className="flex gap-2">
                    <button className="bg-indigo-500 text-white p-1 ">Approve</button>
                    <button className="bg-red-500 p-1 text-white">Reject</button></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleUnderExecution;
