import React from 'react'
import { FaArrowLeft } from "react-icons/fa"; 

function Report() {
  return (
    <div className="top-0 left-0  right-0 h-full w-full flex items-center">
    <div className="mx-[15%] my-[3%] ">
      <div className="flex items-center gap-3 text-2xl my-4 text-[#94618E] ">
        <FaArrowLeft /> <span>Back</span>
      </div>

      <div>
        <p className="text-3xl text-[#94618E] font-semibold">My Account</p>
        <hr className="border-slate-700 w-[90%]" />
      </div>

  
        <div>
          <form className="text-[#94618E] text-xl font-semibold">
            <div className="w-[600px] h-[50px] my-[2%]">
              <label htmlFor="userName">User Name</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="userName"
                  placeholder="james"
                  className=" w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="Full Name">Full Name</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="Full Name"
                  placeholder="james wood"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="Email">Email</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="Email"
                  placeholder="james@111gmail.com"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="Phone">Phone</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="Phone"
                  placeholder="5343422147"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="Address">Address</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="Address"
                  placeholder="**Sydney Opera House** Bennelong Point, Sydney, NSW 20002 "
                  className="w-full h-full placeholder:text-lg "
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="Gender">Gender</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="Gender"
                  placeholder="Male"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="StaffId">Staff Id</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="StaffId"
                  placeholder="BG7123"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[550px] h-[50px] my-[9%]">
              <button className="bg-red-500 text-white w-full h-full rounded-md text-2xl ">
                Log Out
              </button>
            </div>
          </form>
        

       
      </div>
    </div>
  </div>
  ) 
}

export default Report