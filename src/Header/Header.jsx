import React from 'react'

const Header = () => {
  return (
    <div className=" bg-white grid grid-cols-3 gap-4 p-4">
    <div ><img src='vidyalogo2.png' className="h-[40px] "/></div>
    <div className="flex gap-4 items-center">
      <div className="text-[16px] font-medium hover:text-indigo-500 cursor-pointer">Dashboard</div>
      <div className="text-[16px] font-medium hover:text-indigo-500 cursor-pointer">Masters</div>
      <div className="text-[16px] font-medium hover:text-indigo-500 cursor-pointer">Audit Trail</div>
      <div className="text-[16px] font-medium hover:text-indigo-500 cursor-pointer">Work Place</div>
    </div>
    <div></div>
    
  </div>
  )
}

export default Header
