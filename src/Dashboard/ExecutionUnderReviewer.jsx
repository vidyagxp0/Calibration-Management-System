import React from 'react'
import "./Dashboard.css";
import Header from '../Header/Header';
const ExecutionUnderReviewer = () => {
  return (
    <div className="bg-gray-100 header">
    <Header />
    <div className="p-4">
      <h3>Schedule Execution Master</h3>
      <div className="p-2">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>MACHINE ID</th> <th>SCHEDULE TYPE</th> <th>FREQUENCY</th>{" "}
              <th>INSTALLATION DATE</th> 
              <th>SCHEDULE DUEDATE</th>
              <th> ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>	Mac-02</td>
              <td>Calibration</td>
              <td>1 Months</td>
              <td>	2023-07-19</td>
              <td>	2023-08-21</td>
                            <td><div className="flex gap-2">
                  <button className="bg-green-500 text-white p-1 ">View Certificate</button>
                 </div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default ExecutionUnderReviewer
