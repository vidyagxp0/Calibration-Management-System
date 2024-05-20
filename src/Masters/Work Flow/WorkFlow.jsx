import React from 'react';
import Header from '../../Header/Header';

const WorkFlow = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <div className='p-2 flex flex-col md:flex-row justify-between border-b border-gray-400'>
        <div className='text-[20px] font-medium'>WorkFlow Master</div>
        <div className='text-[20px] font-medium'>Action Area</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4 p-2'>
        <div className='col-span-3 overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-300'>
            <thead>
              <tr>
                <th className='p-2 border border-gray-300'>S.No.</th>
                <th className='p-2 border border-gray-300'>GROUP NAME</th>
                <th className='p-2 border border-gray-300'>CREATED BY</th>
                <th className='p-2 border border-gray-300'>CREATED DATE</th>
                <th className='p-2 border border-gray-300'>STATUS</th>
                <th className='p-2 border border-gray-300'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-2 border border-gray-300'>1</td>
                <td className='p-2 border border-gray-300'>WorkFlow 02</td>
                <td className='p-2 border border-gray-300'>Admin</td>
                <td className='p-2 border border-gray-300'>07-12-2022</td>
                <td className='p-2 border border-gray-300'>true</td>
                <td className='p-2 border border-gray-300'>
                  <div className="flex gap-2">
                    <button className="p-1 bg-yellow-500 text-white">
                      Edit
                    </button>
                    <button className="p-1 bg-red-500 text-white" onClick={() => alert("Are You Want To Delete")}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-span-2'>
          <div className="p-2 border-l border-gray-400">
            <div className="flex flex-col pt-4 gap-3">
              <label className="font-medium">WorkFlow Name</label>
              <input type="text" placeholder="" className="border border-gray-500 rounded p-2 w-full" />
            </div>
            <div className='flex flex-col md:flex-row justify-around border-b border-gray-400'>
              <div className='flex flex-col py-3'>
                <label className='text-[14px] font-medium pb-2'>FlowStep</label>
                <select className='p-[10px] text-center border border-gray-500 rounded'>
                  <option>Creator</option>
                  <option>Approver</option>
                  <option>Reviewer</option>
                </select>
              </div>
              <div className='flex flex-col py-3'>
                <label className='text-[14px] font-medium pb-2'>Employee</label>
                <select className='p-[10px] text-center border border-gray-500 rounded'>
                  <option>Admin</option>
                  <option>Test User</option>
                  <option>Test User 01</option>
                </select>
              </div>
              <div className='flex flex-col py-3'>
                <label className='text-[14px] font-medium pb-2'>Role</label>
                <select className='p-[10px] text-center border border-gray-500 rounded'>
                  <option>Admin</option>
                  <option>Admin group</option>
                  <option>End User</option>
                </select>
              </div>
              <div className='flex items-center pt-6 md:pt-0'>
                <button className='p-2 bg-green-600 text-white'>Add</button>
              </div>
            </div>
            <div className='overflow-x-auto'>
              <table className='min-w-full bg-white border border-gray-300 mt-4'>
                <thead>
                  <tr>
                    <th className='p-2 border border-gray-300'>S.No.</th>
                    <th className='p-2 border border-gray-300'>FLOW STEP</th>
                    <th className='p-2 border border-gray-300'>EMPLOYEE</th>
                    <th className='p-2 border border-gray-300'>ROLE</th>
                    <th className='p-2 border border-gray-300'>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-2 border border-gray-300'></td>
                    <td className='p-2 border border-gray-300'></td>
                    <td className='p-2 border border-gray-300'></td>
                    <td className='p-2 border border-gray-300'></td>
                    <td className='p-2 border border-gray-300'></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="bg-green-600 text-white w-full mt-3 py-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
