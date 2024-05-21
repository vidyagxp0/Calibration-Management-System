import React, { useState } from "react";
import Header from "../Header/Header";
import "./AuditTrail.css";

const AuditTrail = () => {
  const [logType, setLogType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const tableData = [
    {
      srNo: 1,
      dateTime: "2024-05-21 10:00:00",
      formName: "Form A",
      actionRowName: "Action 1",
      oldAction: "Pending",
      newAction: "Completed",
      employeeName: "John Doe",
      department: "HR",
      remark: "Reviewed and approved",
    },
    {
      srNo: 2,
      dateTime: "2024-05-20 09:30:00",
      formName: "Form B",
      actionRowName: "Action 2",
      oldAction: "Completed",
      newAction: "Pending",
      employeeName: "Jane Smith",
      department: "Finance",
      remark: "Awaiting final review",
    },
    {
      srNo: 3,
      dateTime: "2024-05-19 14:15:00",
      formName: "Form C",
      actionRowName: "Action 3",
      oldAction: "In Progress",
      newAction: "Completed",
      employeeName: "Alice Johnson",
      department: "IT",
      remark: "Task finished",
    },
    {
      srNo: 4,
      dateTime: "2024-05-18 11:45:00",
      formName: "Form D",
      actionRowName: "Action 4",
      oldAction: "Not Started",
      newAction: "In Progress",
      employeeName: "Bob Brown",
      department: "Operations",
      remark: "Started task",
    },
    {
      srNo: 5,
      dateTime: "2024-05-17 16:20:00",
      formName: "Form E",
      actionRowName: "Action 5",
      oldAction: "Completed",
      newAction: "Completed",
      employeeName: "Carol White",
      department: "Sales",
      remark: "No changes",
    },
  ];
  const [filteredData, setFilteredData] = useState(tableData);
  const handleFilter = () => {
    let filtered = tableData;

    if (logType) {
      filtered = filtered.filter((row) => row.formName.includes(logType));
    }

    if (startDate) {
      filtered = filtered.filter(
        (row) => new Date(row.dateTime) >= new Date(startDate)
      );
    }

    if (endDate) {
      filtered = filtered.filter(
        (row) => new Date(row.dateTime) <= new Date(endDate)
      );
    }

    setFilteredData(filtered);
  };
  return (
    <div className="bg-gray-100 head">
      <Header />
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between p-4">
          <div className="text-lg font-medium lg:self-center">Audit Trail</div>
          <div className="flex flex-wrap gap-4 lg:flex-nowrap">
            <div>
              <select
                className="p-2"
                value={logType}
                onChange={(e) => setLogType(e.target.value)}
              >
                <option value="">Select Log Type</option>
                <option value="Form A">Form A</option>
                <option value="Form B">Form B</option>
                <option value="Form C">Form C</option>
                <option value="Form D">Form D</option>
                <option value="Form E">Form E</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                className="p-2"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <input
                type="date"
                className="p-2"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div>
              <button
                className="p-2 bg-blue-600 text-white"
                onClick={handleFilter}
              >
                Get Data
              </button>
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
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.srNo}</td>
                  <td className="border px-4 py-2">{row.dateTime}</td>
                  <td className="border px-4 py-2">{row.formName}</td>
                  <td className="border px-4 py-2">{row.actionRowName}</td>
                  <td className="border px-4 py-2">{row.oldAction}</td>
                  <td className="border px-4 py-2">{row.newAction}</td>
                  <td className="border px-4 py-2">{row.employeeName}</td>
                  <td className="border px-4 py-2">{row.department}</td>
                  <td className="border px-4 py-2">{row.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditTrail;
