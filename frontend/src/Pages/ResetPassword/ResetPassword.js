import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ResetPassword() {
  const [Email, setEmail] = useState("");
  return (
    <div>
      <Navbar />
      <div className="w-[430px] max-w-[430px] my-4 md:my-0  md:w-[100%] md:max-w-[100%] h-[calc(100vh-300px)] md:h-[calc(100vh-250px)]  flex justify-center items-center top-0 right-0 bottom-0 left-0">
        <div className="bg-[#94618E] w-[300px] h-[250px] md:w-[500px] md:h-[350px] opacity-70 rounded-md">
          <form className="w-full">
            <h2 className="text-center text-xl md:text-3xl font-medium text-white my-3 border-b-2  mx-4">
              Forgot Password
            </h2>

            <div className="w-full my-7 mx-4">
              <label htmlFor="Email" className="text-white text-lg md:text-2xl font-medium">
                Registered Email :
              </label>
              <div className="w-full my-3">
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Enter your Email"
                  value={Email}
                  className="w-[80%]  md:w-[90%] h-[30px] md:h-[50px] outline-none rounded-xl placeholder-[#94618E] md:text-xl"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full my-6 md:my-8 mx-4">
              <button className="w-[80%] h-[30px] md:w-[90%] md:h-[50px] bg-black text-white rounded-full md:text-2xl tracking-wider">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ResetPassword;
