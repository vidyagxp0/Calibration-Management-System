import React from 'react';
import Header from '../../Header/Header';
import { Checkbox } from '@mui/material';

const AccessRole = () => {
    const tableData = [
        { menuName: "Dashboard" },
        { menuName: "Department" },
        { menuName: "Designation" },
        { menuName: "Access Role" },
        { menuName: "Employee" },
        { menuName: "WorkFlow" },
        { menuName: "Audit Trail" },
        { menuName: "Function Location" },
        { menuName: "CheckList Master" },
        { menuName: "Master Tools" },
        { menuName: "Machine Creation" },
        { menuName: "Schedule Creation" },
        { menuName: "Schedule Plan" },
    ];

    return (
        <div className='bg-gray-100 h-full'>
            <Header />
            <div className='p-2 flex justify-between border border-b-gray-400'>
                <div className='text-[20px] font-medium'>WorkFlow Master</div>
                <div className='text-[20px] font-medium'>Action Area</div>
            </div>
            <div className='grid grid-cols-5 gap-4 p-2'>
                <div className='col-span-3'>
                    <div>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border p-2">S.No.</th>
                                    <th className="border p-2">GROUP NAME</th>
                                    <th className="border p-2">CREATED BY</th>
                                    <th className="border p-2">CREATED DATE</th>
                                    <th className="border p-2">STATUS</th>
                                    <th className="border p-2">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">1</td>
                                    <td className="border p-2">WorkFlow 02</td>
                                    <td className="border p-2">Admin</td>
                                    <td className="border p-2">07-12-2022</td>
                                    <td className="border p-2">true</td>
                                    <td className="border p-2">
                                        <div className="flex gap-4">
                                            <button className="p-1 bg-yellow-500 text-white">Edit</button>
                                            <button className="p-1 bg-red-500 text-white" onClick={() => alert("Are You Want To Delete")}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className="p-2 border border-l-gray-400">
                        <div className='grid grid-cols-2 gap-4 border border-b-gray-400 pb-3'>
                            <div className="flex flex-col pt-4 gap-3">
                                <label className="font-medium">Group Name</label>
                                <input type="text" placeholder="" className="border border-gray-500 rounded p-2 w-full" />
                            </div>
                            <div className="flex flex-col pt-4 gap-3">
                                <label className="font-medium">Description</label>
                                <input type="text" placeholder="" className="border border-gray-500 rounded p-2 w-full" />
                            </div>
                        </div>

                        <div className='pt-3'>
                            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                <table className='w-full border-collapse'>
                                    <thead className='sticky top-0 bg-white'>
                                        <tr>
                                            <th className="border p-2">S.No.</th>
                                            <th className="border p-2">MENU NAME</th>
                                            <th className="border p-2">VIEW</th>
                                            <th className="border p-2">CREATE</th>
                                            <th className="border p-2">MODIFY</th>
                                            <th className="border p-2">DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((item, index) => (
                                            <tr key={index}>
                                                <td className="border p-2">{index + 1}</td>
                                                <td className="border p-2">{item.menuName}</td>
                                                <td className="border p-2 text-center"><Checkbox style={{ padding: 0 }} /></td>
                                                <td className="border p-2 text-center"><Checkbox style={{ padding: 0 }} /></td>
                                                <td className="border p-2 text-center"><Checkbox style={{ padding: 0 }} /></td>
                                                <td className="border p-2 text-center"><Checkbox style={{ padding: 0 }} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button className="bg-green-600 text-white w-full mt-3 py-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccessRole;
