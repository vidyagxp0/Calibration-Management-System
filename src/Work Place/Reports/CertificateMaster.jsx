import React from 'react'
import Header from '../../Header/Header'

const CertificateMaster = () => {
  const data=[{
    machineId:"M001",
    machineName:"Test Machine",
    calibrationType:"Caliration",
    installationDate:"23-10-2023",
    doneDate:"23-11-2024",
    dueDate:"23-11-2023",
    plannigDate:"23-11-2023",
    frequency:"1 Months",
    createdBy:"Admin"
  },{
    machineId:"M002",
    machineName:"Test Machine",
    calibrationType:"Caliration",
    installationDate:"23-10-2023",
    doneDate:"23-11-2024",
    dueDate:"23-11-2023",
    plannigDate:"23-11-2023",
    frequency:"1 Months",
    createdBy:"Admin"
  },{
    machineId:"M003",
    machineName:"Test Machine",
    calibrationType:"Caliration",
    installationDate:"23-10-2023",
    doneDate:"23-11-2024",
    dueDate:"23-11-2023",
    plannigDate:"23-11-2023",
    frequency:"1 Months",
    createdBy:"Admin"
  },{
    machineId:"M004",
    machineName:"Test Machine",
    calibrationType:"Caliration",
    installationDate:"23-10-2023",
    doneDate:"23-11-2024",
    dueDate:"23-11-2023",
    plannigDate:"23-11-2023",
    frequency:"1 Months",
    createdBy:"Admin"
  },{
    machineId:"M005",
    machineName:"Test Machine",
    calibrationType:"Caliration",
    installationDate:"23-10-2023",
    doneDate:"23-11-2024",
    dueDate:"23-11-2023",
    plannigDate:"23-11-2023",
    frequency:"1 Months",
    createdBy:"Admin"
  },{
    machineId:"M006",
    machineName:"Test Machine",
    calibrationType:"Caliration",
    installationDate:"23-10-2023",
    doneDate:"23-11-2024",
    dueDate:"23-11-2023",
    plannigDate:"23-11-2023",
    frequency:"1 Months",
    createdBy:"Admin"
  }]
  return (
    <div className='bg-gray-100 h-[100vh]'>
      <Header/>
      <div className='px-4 py-3'>
<div className='text-[24px] font-semibold'>Certificate Master</div>
      </div>
      <div className='p-3'>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>MACHINEID</th>
              <th>MACHINENAME</th>
              <th>CALIBRATIONTYPE</th>
              <th>INSTALLATIONDATE</th>
              <th>DONE DATE</th>
              <th>DUE DATE</th>
              <th>PLANING DATE</th>
              <th>FREQUENCY</th>
              <th>CREATEDBY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index)=>{
              return <tr>
                <td>{index+1}</td>
                <td>{item.machineId}</td>
                <td>{item.machineName}</td>
                <td>{item.calibrationType}</td> 
                <td>{item.installationDate}</td>
                <td>{item.doneDate}</td>
                <td>{item.dueDate}</td>
                <td>{item.plannigDate}</td>
                <td>{item.frequency}</td>
                <td>{item.createdBy}</td>
                <td>
                  <button className='bg-yellow-500 text-white p-2'>Get Certificate</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CertificateMaster
