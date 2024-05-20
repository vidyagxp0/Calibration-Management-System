import React from "react";
import Header from "../Header/Header";
import "./AuditTrail.css";

const AuditTrail = () => {
  return (
    <div className="bg-gray-100 head">
      <Header />
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between p-4">
          <div className="text-lg font-medium lg:self-center">Audit Trail</div>
          <div className="flex flex-wrap gap-4 lg:flex-nowrap">
            <div>
              <select className="p-2">
                <option>Select Log Type</option>
                <option>User Log</option>
                <option>Activity Log</option>
              </select>
            </div>
            <div>
              <input type="date" className="p-2" />
            </div>
            <div>
              <input type="date" className="p-2" />
            </div>
            <div>
              <button className="p-2 bg-blue-600 text-white">Get Data</button>
            </div>
          </div>
        </div>

        <div className="p-2 overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">SR.NO</th>
                <th className="px-4 py-2">DATE TIME</th>
                <th className="px-4 py-2">FORM NAME</th>
                <th className="px-4 py-2">ACTION ROW NAME</th>
                <th className="px-4 py-2">OLD ACTION</th>
                <th className="px-4 py-2">NEW ACTION</th>
                <th className="px-4 py-2">EMPLOYEE NAME</th>
                <th className="px-4 py-2">DEPARTMENT</th>
                <th className="px-4 py-2">REMARK</th>
              </tr>
            </thead>
            {/* Add tbody and table rows here */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditTrail;
