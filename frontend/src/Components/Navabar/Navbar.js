import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <div className='w-[360px] max-w-[360px] md:w-[100%] md:max-w-[100%] h-[80px] md:h-[100px] bg-[#94618E] '>
    //      <div className='w-[360px] max-w-[360px] md:w-[80%] md:max-w-[80%] flex justify-between items-center   md:mx-[10%] my-auto md:p-3'>
    //         <Link  to='/' className='my-4 w-[180px] ml-[10px]'>
    //            <span className=' text-xl md:text-3xl text-white '>AM SHIFTER</span>
    //         </Link>

    //         <Link  to='/login' className='my-4 w-[180px]'>
    //             <button className='w-[70px] h-[40px] md:w-[100px] md:h-[50px] bg-[#F8EEE7] text-black md:text-xl rounded-md hover:bg-black hover:text-white ml-[40px] md:ml-[0px]'>Login</button>
    //         </Link>

    //      </div>

    // </div>

    <div className="w-[430px] max-w-[430px] md:w-[100%] md:max-w-[100%] h-[80px] md:h-[100px] bg-[#94618E] ">
      <div className="w-full max-w-full md:w-[80%] md:max-w-[80%] flex justify-between items-center   md:mx-[10%] my-auto md:p-3">
        <Link to="/" className="my-4 w-[180px] ml-[10px]">
          <span className=" text-xl md:text-3xl text-white ">AM SHIFTER</span>
        </Link>

        <Link to="/login" className="my-4 w-[180px]">
          <button className="w-[70px] h-[40px] md:w-[100px] md:h-[50px] bg-[#F8EEE7] text-black md:text-xl rounded-md hover:bg-black hover:text-white ml-[40px] md:ml-[0px]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
