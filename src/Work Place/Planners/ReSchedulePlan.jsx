import React from 'react'
import Header from '../../Header/Header'

const ReSchedulePlan = () => {
  return (
    <div className='bg-gray-100'>
     <Header/>
     <div className="p-2 flex justify-between border border-b-gray-400">
        <div className="text-[20px] font-medium">Re-Schedule</div>
      </div> 
      <div className='p-2 overflow-x-auto'>
        <table className="min-w-full">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>MACHINE ID</th>
              <th>FREQUENCY</th>
              <th>CALIBRATION TYPE</th>
              <th>STATUS</th>
              <th>REMARK</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReSchedulePlan
