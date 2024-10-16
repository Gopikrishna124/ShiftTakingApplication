import React, { useState } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function UpdatePassword() {
  const [staffId, setStaffId] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="w-[430px] max-w-[430px] my-4 md:my-0  md:w-[100%] md:max-w-[100%] h-[calc(100vh-300px)] md:h-[calc(100vh-250px)] flex justify-center items-center top-0 right-0 bottom-0 left-0">
        <div className="bg-[#94618E] w-[300px] h-[350px] md:w-[500px] md:h-[450px] opacity-70 rounded-md">
          <form className="w-full">
            <h2 className="text-center text-xl md:text-3xl font-medium text-white my-3 border-b-2 mx-4">
              Reset Password
            </h2>

            <div className="w-full my-7 mx-4">
              <label
                htmlFor="staffId"
                className="text-white text-lg md:text-2xl"
              >
               Enter Your Staff ID :
              </label>
              <div className="w-full my-3">
                <input
                  type="text"
                  id="staffId"
                  name="StaffId"
                  placeholder="Enter your Staff ID"
                  value={staffId}
                  className="w-[80%]  md:w-[90%] h-[30px] md:h-[50px] outline-none rounded-xl placeholder-[#94618E] md:text-xl"
                  onChange={(e) => setStaffId(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full my-7 mx-4">
              <label
                htmlFor="Password"
                className="text-white text-lg  md:text-2xl"
              >
               Enter New Password :
              </label>
              <div className="w-full my-3 flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  name="Password"
                  placeholder="Enter your Password"
                  value={password}
                  className="w-[80%] md:w-[90%] h-[30px] md:h-[50px] outline-none rounded-xl placeholder-[#94618E] md:text-xl"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div
                  className="-ml-8 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <span>
                      <FaEye className="md:text-2xl" />
                    </span>
                  ) : (
                    <span>
                      <FaRegEyeSlash className="md:text-2xl" />
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full my-6 md:my-9 mx-4">
              <button className="w-[80%] h-[30px] md:w-[90%] md:h-[50px] bg-black text-white rounded-full md:text-2xl tracking-wider">
                Reset Your Password
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default UpdatePassword