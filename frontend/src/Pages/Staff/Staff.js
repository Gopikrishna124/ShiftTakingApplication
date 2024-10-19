import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function Staff() {
  const [showdropdown, setShowdropdown] = useState(false);
  const [status,setStatus]=useState('Pending')

  function handleMouseEnter() {
    setShowdropdown(!showdropdown);
  }

  function changeStatusColor(status){

    switch(status){
      case 'Pending': {
       return  'text-red-500'
      }
      case 'success':{
        return 'text-green-500'
      }

    }
  }

  return (
    <div className="m-20">
      <div className="flex justify-between mx-[10%] my-auto items-center">
        <span className="text-3xl text-slate-500 font-bold">All Shifts</span>
        <div className="relative flex gap-4 items-center">
          <FaUser className="text-3xl text-[#94618E]" />
          <div className="flex items-center gap-2" onClick={handleMouseEnter}>
            <span className="text-3xl text-slate-500 font-bold cursor-pointer">
              Arjun Deshmukh
            </span>
            {showdropdown ? (
              <span className="text-3xl cursor-pointer">
                <IoIosArrowDropdownCircle className="text-[#94618E]" />
              </span>
            ) : (
              <span className="text-3xl cursor-pointer">
                <IoIosArrowDropupCircle className="text-[#94618E]" />
              </span>
            )}

            {showdropdown && (
              <div className="bg-[#94618E] text-white w-[250px] h-[350px] absolute top-12 left-24 z-[999]">
                <ul className="w-full h-full px-5 py-2 text-xl">
                  <Link to='/myaccount'>
                    <p className="p-4 hover:bg-[#F8EEE7] hover:text-black">
                      My Accounts
                    </p>
                  </Link>
                  <Link>
                    <p className="p-4 hover:bg-[#F8EEE7] hover:text-black">
                      My Statements
                    </p>
                  </Link>
                  <Link to="/myshifts">
                    <p className="p-4 hover:bg-[#F8EEE7] hover:text-black">
                      My Shifts
                    </p>
                  </Link>
                  <Link to='/report'>
                    <p className="p-4 hover:bg-[#F8EEE7] hover:text-black">
                      Report Incidence
                    </p>
                  </Link>
                  <Link>
                    <p className="p-4 hover:bg-[#F8EEE7] hover:text-black">
                      Log Out
                    </p>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="m-12">
        <p className="mx-[8%] my-auto text-2xl text-[#94618E] font-bold underline">
          My Shifts
        </p>

        <div className="mx-[8%] my-12 bg-[#94618E] text-white text-2xl h-auto opacity-80
         p-4 rounded-2xl border-l-[15px] border-l-black
         flex justify-between items-center">

          <div className="w-[500px] text-3xl p-7 text-black ">
            <span className="text-white">Mon 10 </span>
          </div>

          <div className="w-[700px] text-2xl  text-white  flex flex-col">
            <span>
              242, 9th Main Rd, Jayanagar East, Jaya Nagar 1st Block, Jayanagar,
              Bengaluru, Karnataka 560011, India 01:00PM - 05:00 PM
            </span>
            <span className="text-black text-xl font-bold mt-2">Duration : 4 hrs</span>
          </div>

          <div className="w-[500px] text-center ">
            <span className='bg-[#F8EEE7] text-red-500 font-medium p-3 rounded-full text-xl'>Pending</span>
          </div>

          <div className="w-[100px] text-black text-3xl">
            <FaEye className="bg-[#F8EEE7] cursor-pointer text-green-500 font-semibold w-[50px] text-2xl rounded-full"/>
          </div>
        </div>
        

        <div className="mx-[8%] my-12 bg-[#94618E] text-white text-2xl h-auto opacity-80
         p-4 rounded-2xl border-l-[15px] border-l-black
         flex justify-between items-center">

          <div className="w-[500px] text-3xl p-7 text-black ">
            <span className="text-white">Mon 10 </span>
          </div>

          <div className="w-[700px] text-2xl  text-white  flex flex-col">
            <span>
              242, 9th Main Rd, Jayanagar East, Jaya Nagar 1st Block, Jayanagar,
              Bengaluru, Karnataka 560011, India 01:00PM - 05:00 PM
            </span>
            <span className="text-black text-xl font-bold mt-2">Duration : 4 hrs</span>
          </div>

          <div className="w-[500px] text-center ">
            <span className="bg-[#F8EEE7] text-red-500 font-medium p-3 rounded-full text-xl">Pending</span>
          </div>

          <div className="w-[100px] text-black font-bold text-3xl">
            <FaEye className="bg-[#F8EEE7] text-green-500 font-semibold w-[50px] text-2xl rounded-full"/>
          </div>
        </div>


        <h1 className="mx-[8%] my-12 text-3xl text-slate-500 font-bold">Bid Shifts</h1>
        <div className="mx-[8%] my-12 bg-[#94618E] text-white text-2xl h-auto opacity-80
         p-4 rounded-2xl border-l-[15px] border-l-black
         flex justify-between items-center">

          <div className="w-[500px] text-3xl p-7 text-black ">
            <span className="text-white">Mon 10</span>
          </div>

          <div className="w-[700px] text-2xl  text-white  flex flex-col">
            <span>
              242, 9th Main Rd, Jayanagar East, Jaya Nagar 1st Block, Jayanagar,
              Bengaluru, Karnataka 560011, India 01:00PM - 05:00 PM
            </span>
            <span className="text-black  font-bold text-xl  mt-2 ">Duration : 4 hrs</span>
          </div>

          <div className="w-[500px] text-center ">
            <span className="bg-[#F8EEE7] text-red-500 font-medium p-3 rounded-full text-xl">Pending</span>
          </div>

          <div className="w-[100px] text-black text-3xl">
            <FaEye className="bg-[#F8EEE7] text-green-500 font-semibold w-[50px] text-2xl rounded-full"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Staff;
