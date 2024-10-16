import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';


function MyShifts() {
 
  
  return (
    <div top-0 left-0  right-0 h-full w-full flex items-center>
      <div className="mx-[15%] my-[3%] flex justify-between items-center">
        <div>
        <div className="flex items-center gap-3 text-2xl my-4 text-[#94618E] ">
          <FaArrowLeft /> <span>Back</span>
        </div>
        <p>Name : James Wood</p>
      </div>

      <div className='text-2xl'>
         <span>All/Pasts Shifts</span>
      </div>

       <div>
      
        </div>

      </div>
    </div>
  )
}

export default MyShifts