import React from "react";
import Header from "../../Header/Header";

const ScheduleReport = () => {
  const data = [
    {
      machineId: "M001",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "23-10-2022",
      SCHEDULE: {
        planDate: "23-11-2022",
        doneDate: "23-11-2022",
        dueDate: "23-11-2022",
      },
      checklistId: "PM_CHKID_003",
      department: "Developer",
      createDate: "23-11-2022",
      status: "Completed",
    },
    {
      machineId: "M001",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "23-10-2022",
      SCHEDULE: {
        planDate: "23-11-2022",
        doneDate: "23-11-2022",
        dueDate: "23-11-2022",
      },
      checklistId: "PM_CHKID_003",
      department: "Developer",
      createDate: "23-11-2022",
      status: "Completed",
    },
    {
      machineId: "M003",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "23-10-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "PM_CHKID_003",
      department: "Developer",
      createDate: "23-11-2022",
      status: "Completed",
    },
    {
      machineId: "M003",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "23-10-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "PM_CHKID_003",
      department: "Developer",
      createDate: "23-11-2022",
      status: "Block",
    },
    {
      machineId: "Arizona01",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "23-10-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "TEMP01",
      department: "Developer",
      createDate: "23-11-2022",
      status: "Block",
    },
    {
      machineId: "M003",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "23-10-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "PM_CHKID_003",
      department: "Developer",
      createDate: "26-11-2022",
      status: "Overdue",
    },
    {
      machineId: "M003",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "26-10-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "PM_CHKID_003",
      department: "Developer",
      createDate: "26-11-2022",
      status: "Overdue",
    },
    {
      machineId: "M003",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "25-10-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "PM_CHKID_003",
      department: "Developer",
      createDate: "25-11-2022",
      status: "Completed",
    },
    {
      machineId: "M003",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "25-11-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "PM_CHKID_003",
      department: "Developer",
      createDate: "25-11-2022",
      status: "Overdue",
    },
    {
      machineId: "Arizona01",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "23-10-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "TEMP01",
      department: "Developer",
      createDate: "23-11-2022",
      status: "Completed",
    },
    {
      machineId: "Arizona01",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "23-10-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "TEMP01",
      department: "Developer",
      createDate: "26-11-2022",
      status: "Overdue",
    },
    {
      machineId: "Arizona01",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "25-11-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "TEMP01",
      department: "Developer",
      createDate: "25-11-2022",
      status: "Overdue",
    },
    {
      machineId: "M004",
      scheduleType: "Calibration",
      type: "Internal",
      frequency: "1 Months",
      installationDate: "25-11-2022",
      SCHEDULE:{
        planDate: '23-11-2022', doneDate: '23-11-2022', dueDate: '23-11-2022',
      },
      checklistId: "CL004",
      department: "Developer",
      createDate: "25-11-2022",
      status: "Overdue",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="px-4 py-3">
        <div className="text-[24px] font-semibold">Schedule Report</div>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">#</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">MACHINEID</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">SCHEDULETYPE</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">TYPE</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">FREQUENCY</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">INSTALLATION DATE</th>
              <th colSpan="3" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">SCHEDULE</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">CHECKLISTID</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">DEPARTMENT</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">CREATEDDATE</th>
              <th rowSpan="2" className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">STATUS</th>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">PLANDATE</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">DONEDATE</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">DUEDATE</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((machine, index) => (
              <tr key={`${machine.machineId}-${index}`}>
                <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.machineId}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.scheduleType}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.type}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.frequency}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.installationDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.SCHEDULE.planDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.SCHEDULE.doneDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.SCHEDULE.dueDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.checklistId}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.department}</td>
                <td className="px-4 py-2 whitespace-nowrap">{machine.createDate}</td>
                <td className={`px-4 py-2 whitespace-nowrap ${machine.status === 'Completed' ? 'text-green-500' : machine.status === 'Overdue' ? 'text-red-500' : 'text-yellow-500'}`}>{machine.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleReport;
