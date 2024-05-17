import React from 'react'
import Header from '../Header/Header'
import "./AuditTrail.css"
const AuditTrail = () => {
  return (
    <div className='bg-gray-200  head'>
      <Header/>
      <div className=''>
        <div className='flex justify-between p-4'>
            <div className='text-[18px] font-medium '>Audit Trail</div>
            <div className='flex gap-4'>
                <div>
                    <select className='p-[10px] text-center'>
                        <option>Select Log Type</option>
                        <option>User Log</option>
                        <option>Activity Log</option>
                    </select>
                </div>
                <div>
                    <input type='date' className='p-2'/>
                </div>
                <div>
                <input type='date' className='p-2'/>

                </div>
                <div><button className='p-2 bg-blue-600 text-white'>Get Data</button></div>
            </div>
        </div>
        <div className='p-2'>
            <table>
                <thead>
                    <tr>
                        <th>SR.NO</th>
                        <th>DATE TIME</th>
                        <th>FORM NAME</th>
                        <th>ACTION ROW NAME</th>
                        <th>OLD ACTION</th>
                        <th>NEW ACTION</th>
                        <th>EMPLOYEE NAME</th>
                        <th>DEPARTMENT</th>
                        <th>REMARK</th>
                    </tr>
                </thead>
            </table>
        </div>
      </div>
    </div>
  )
}

export default AuditTrail
