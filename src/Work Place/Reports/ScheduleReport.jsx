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
    <div className="bg-gray-200">
      <Header />
      <div className="px-4 py-3">
        <div className="text-[24px] font-semibold">Schedule Report</div>
        <div className="p-2">
          <table className="machine-report-table">
            <thead>
              <tr>
                <th rowSpan="2">#</th>
                <th rowSpan="2">MACHINEID</th>
                <th rowSpan="2">SCHEDULETYPE</th>
                <th rowSpan="2">TYPE</th>
                <th rowSpan="2">FREQUENCY</th>
                <th rowSpan="2">INSTALLATION DATE</th>
                <th colSpan="3">SCHEDULE</th>
                <th rowSpan="2">CHECKLISTID</th>
                <th rowSpan="2">DEPARTMENT</th>
                <th rowSpan="2">CREATEDDATE</th>
                <th rowSpan="2">STATUS</th>
              </tr>
              <tr>
                <th>PLANDATE</th>
                <th>DONEDATE</th>
                <th>DUEDATE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((machine, index) => (
                <tr key={machine.MACHINEID}>
                  <td>{index + 1}</td>
                  <td>{machine.machineId}</td>
                  <td>{machine.scheduleType}</td>
                  <td>{machine.type}</td>
                  <td>{machine.frequency}</td>
                  <td>{machine.installationDate}</td>
                  <td>{machine.SCHEDULE.planDate}</td>
                  <td>{machine.SCHEDULE.doneDate}</td>
                  <td>{machine.SCHEDULE.dueDate}</td>
                 
                  <td>{machine.checklistId}</td>
                  <td>{machine.department}</td>
                  <td>{machine.createDate}</td>
                  <td>{machine.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleReport;
