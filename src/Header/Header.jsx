import React from 'react'

const Header = () => {
  return (
    <div className=" bg-white grid grid-cols-3 gap-4 p-4">
    <div ><img src='vidyalogo2.png' className="h-[40px] "/></div>
    <div className="flex gap-4">
      <div className="text-[16px] font-medium hover:text-indigo-500">Dashboard</div>
      <div className="text-[16px] font-medium hover:text-indigo-500">Masters</div>
      <div className="text-[16px] font-medium hover:text-indigo-500">Audit Trail</div>
      <div className="text-[16px] font-medium hover:text-indigo-500">Work Place</div>
    </div>
    <div></div>
    
  </div>
  )
}

export default Header
