import React from 'react'
import Header from '../../Header/Header'

const WorkFlow = () => {
  return (
    <div className='bg-gray-200 h-ful'>
      <Header/>
      <div className='p-2 flex justify-between border border-b-gray-400'>
        <div className='text-[20px] font-medium'>WorkFlow Master</div>
        <div className='text-[20px] font-medium'>Action Area</div>
      </div>
      <div className='grid grid-cols-5 gap-4 p-2'>
        <div className='col-span-3'>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>GROUP NAME</th>
                            <th>CREATED BY</th>
                            <th>CREATED DATE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>WorkFlow 02</td>
                            <td>Admin</td>
                            <td>07-12-2022</td>
                            <td>true</td>
                            <td><div className="flex gap-4">
                      <button className="p-1 bg-yellow-500 text-white">
                        Edit
                      </button>
                      <button className="p-1 bg-red-500 text-white" onClick={()=>alert("Are You Want To Delete")}>
                        Delete
                      </button>
                    </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='col-span-2'>
        <div className="p-2 border border-l-gray-400">
         <div className="flex flex-col pt-4 gap-3">
            <label className="font-medium">WorkFlow  Name</label>
            <input type="text" placeholder="" className="border border-gray-500 rounded p-2 w-full"/>
         </div>
         <div className='flex justify-around border border-b-gray-400'>
            <div className='flex flex-col py-3'>
                <label className='text-[14px] font-medium pb-2'>FlowStep</label>
            <select className='p-[10px] text-center'>
                        <option>Creator</option>
                        <option>Approver</option>
                        <option>Reviewver</option>
                    </select>
            </div>
            <div className='flex flex-col py-3'>
                <label className='text-[14px] font-medium pb-2'>Employee</label>
            <select className='p-[10px] text-center'>
                        <option>Admin</option>
                        <option>Test User </option>
                        <option>Test User 01</option>
                    </select>
            </div>
            <div className='flex flex-col py-3'>
                <label className='text-[14px] font-medium pb-2'>Role</label>
            <select className='p-[10px] text-center'>
                        <option>Admin</option>
                        <option>Admin group</option>
                        <option> End User</option>
                    </select>
            </div>
            <div className='pt-[42px]'>
                <button className='p-2 bg-green-600 text-white '>Add</button>
            </div>
         </div>
<div>
    <table>
       <thead>
       <tr>
            <th>S.No.</th>
            <th>FLOW STEP</th>
            <th>EMPLOYEE</th>
            <th>ROLE</th>
            <th>ACTION</th>
        </tr>
       </thead>
        <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

        </tr>
    </tbody>
    </table>
  
</div>
<button className="bg-green-600 text-white w-full mt-3 py-2">Submit</button>


         </div>             
        </div>
      </div>
    </div>
  )
}

export default WorkFlow
