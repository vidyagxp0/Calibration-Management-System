import React from "react";
import Header from "../../Header/Header";

const MachineReport = () => {
  const data = [
    { MACHINEID: "M001", MACHINENAME: "Test Machine", DEPARTMENT: "Developer", LOCATION: "Test Location", WORKFLOW: "WorkFlow 01", SCHEDULE: { COMPLETED: 2, PENDING: 0, OVERDUE: 1, BLOCK: 0 }, STATUS: "Active", CREATEDBY: "Admin", CREATEDDATE: "03-11-2022" },
    { MACHINEID: "M003", MACHINENAME: "Test Machine 02", DEPARTMENT: "Developer", LOCATION: "Test Location 02 Update", WORKFLOW: "WorkFlow 01", SCHEDULE: { COMPLETED: 2, PENDING: 0, OVERDUE: 4, BLOCK: 1 }, STATUS: "Active", CREATEDBY: "Admin", CREATEDDATE: "04-11-2022" },
    { MACHINEID: "Arizona01", MACHINENAME: "PG", DEPARTMENT: "Test 1", LOCATION: "Floor-1", WORKFLOW: "WorkFlow 02", SCHEDULE: { COMPLETED: 1, PENDING: 0, OVERDUE: 9, BLOCK: 1 }, STATUS: "Active", CREATEDBY: "Admin", CREATEDDATE: "19-11-2022" },
    { MACHINEID: "M004", MACHINENAME: "Test Machine 04", DEPARTMENT: "Developer", LOCATION: "Test Location", WORKFLOW: "WorkFlow 01", SCHEDULE: { COMPLETED: 1, PENDING: 0, OVERDUE: 2, BLOCK: 1 }, STATUS: "Active", CREATEDBY: "Admin", CREATEDDATE: "02-12-2022" },
    { MACHINEID: "M005", MACHINENAME: "Test Machine 05", DEPARTMENT: "Developer", LOCATION: "Test Location", WORKFLOW: "WorkFlow 01", SCHEDULE: { COMPLETED: 1, PENDING: 0, OVERDUE: 0, BLOCK: 1 }, STATUS: "Inactive", CREATEDBY: "Admin", CREATEDDATE: "02-12-2022" },
    { MACHINEID: "INT001", MACHINENAME: "Presure Gauge", DEPARTMENT: "Developer", LOCATION: "Test Location", WORKFLOW: "WorkFlow 01", SCHEDULE: { COMPLETED: 1, PENDING: 0, OVERDUE: 1, BLOCK: 0 }, STATUS: "Active", CREATEDBY: "Admin", CREATEDDATE: "03-12-2022" },
    { MACHINEID: "M006", MACHINENAME: "Test Machine 06", DEPARTMENT: "Developer", LOCATION: "Test Location", WORKFLOW: "WorkFlow 02", SCHEDULE: { COMPLETED: 2, PENDING: 0, OVERDUE: 2, BLOCK: 0 }, STATUS: "Active", CREATEDBY: "Admin", CREATEDDATE: "07-12-2022" },
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="px-4 py-3">
        <div className="text-[24px] font-semibold">Machine Report</div>
      </div>
      <div className="p-3 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">#</th>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MACHINEID</th>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MACHINENAME</th>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DEPARTMENT</th>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">LOCATION</th>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">WORKFLOW</th>
              <th colSpan="4" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">SCHEDULE</th>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">STATUS</th>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">CREATEDBY</th>
              <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">CREATEDDATE</th>
            </tr>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">COMPLETED</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">PENDING</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">OVERDUE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">BLOCK</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((machine, index) => (
              <tr key={machine.MACHINEID}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.MACHINEID}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.MACHINENAME}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.DEPARTMENT}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.LOCATION}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.WORKFLOW}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.SCHEDULE.COMPLETED}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.SCHEDULE.PENDING}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.SCHEDULE.OVERDUE}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.SCHEDULE.BLOCK}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.STATUS}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.CREATEDBY}</td>
                <td className="px-6 py-4 whitespace-nowrap">{machine.CREATEDDATE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MachineReport;
