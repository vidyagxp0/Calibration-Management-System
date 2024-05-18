import React from 'react'
import Header from '../../Header/Header';

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
    <div className='bg-orange-100'>
      <Header/>
      <div className='px-4 py-3'>
<div className='text-[24px] font-semibold'>Machine Report</div>
      </div>
   <table className='machine-report-table'>
        <thead>
          <tr>
            <th rowSpan="2">#</th>
            <th rowSpan="2">MACHINEID</th>
            <th rowSpan="2">MACHINENAME</th>
            <th rowSpan="2">DEPARTMENT</th>
            <th rowSpan="2">LOCATION</th>
            <th rowSpan="2">WORKFLOW</th>
            <th colSpan="4">SCHEDULE</th>
            <th rowSpan="2">STATUS</th>
            <th rowSpan="2">CREATEDBY</th>
            <th rowSpan="2">CREATEDDATE</th>
          </tr>
          <tr>
           
            <th>COMPLETED</th>
            <th>PENDING</th>
            <th>OVERDUE</th>
            <th>BLOCK</th>
          
          </tr>
        </thead>
        <tbody>
          {data.map((machine, index) => (
            <tr key={machine.MACHINEID}>
              <td>{index + 1}</td>
              <td>{machine.MACHINEID}</td>
              <td>{machine.MACHINENAME}</td>
              <td>{machine.DEPARTMENT}</td>
              <td>{machine.LOCATION}</td>
              <td>{machine.WORKFLOW}</td>
              <td>{machine.SCHEDULE.COMPLETED}</td>
              <td>{machine.SCHEDULE.PENDING}</td>
              <td>{machine.SCHEDULE.OVERDUE}</td>
              <td>{machine.SCHEDULE.BLOCK}</td>
              <td>{machine.STATUS}</td>
              <td>{machine.CREATEDBY}</td>
              <td>{machine.CREATEDDATE}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MachineReport
