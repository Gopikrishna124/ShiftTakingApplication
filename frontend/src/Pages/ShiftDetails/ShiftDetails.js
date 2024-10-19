import React from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

function ShiftDetails() {
  return (
    <div>
      <div className="mx-[15%] my-[3%]">
        <div className="flex items-center gap-3 text-2xl my-4 text-[#94618E]">
          <FaArrowLeft /> <span>Back</span>
        </div>

        <div className="flex gap-24">
          <div className="border border-[#94618E] opacity-80 text-[#94618E] font-bold text-xl  w-[50%] h-auto min-h-[700px] p-4 rounded-xl">
            <ul>
              <li className="p-3">
                <span className=" text-red-500 font-bold text-2xl">ID : </span>
                477843403495
              </li>

              <li className="p-3">
                <span className="  text-red-500 font-bold text-2xl">Location : </span>
                HSR LAYOUT sector 1 near nandas restuarant
              </li>

              <li className="p-3 ">
                <span className="  text-red-500 font-bold text-2xl">
                  Date and Time :{" "}
                </span>
                15-09-2024 08:00AM - 12:00PM
              </li>

              <li className="p-3 ">
                <span className="  text-red-500 font-bold text-2xl">Type: </span>
                AM
              </li>

              <li className="p-3 ">
                <span className="  text-red-500 font-bold text-2xl">Duration: </span>4
                hours
              </li>

              <li className="p-3">
                <span className="  text-red-500 font-bold text-2xl">Client: </span>
                Arjun Deshmukh
              </li>

              <li className="p-3">
                <span className=" text-red-500 font-bold text-2xl">Status: </span>
                Pending
              </li>

              <li className="p-3 ">
                <span className=" text-red-500 font-bold text-2xl">Notes: </span>
                Make sure to clean room
              </li>
            </ul>

            <div className="p-3 flex gap-5">
              <span className=" text-red-500 font-bold text-2xl ">
                Distance covered
              </span>
              <input
                type="text"
                className=" text-black placeholder:text-white "
              />

              <div>
                <span>Km</span>
                <button className="bg-red-500 text-white font-semibold text-xl p-2">
                  Update
                </button>
              </div>
            </div>
          </div>

          <div>
            <table className="usertable">
              <tr>
                <th>Date/Time</th>
                <th>Case</th>
                <th>Notes</th>
              </tr>

              <tr>
                <td>03/7/2024 , 03:30PM</td>
                <td>Violence</td>
                <td>Violence occured between Client and neighbours</td>
              </tr>

             
            </table>

            <div className="flex justify-end my-8 gap-3 items-center">
              <span className="text-red-500 font-semibold text-xl">Add Casenotes</span>
              <FaPlus  className="text-red-500 font-bold text-xl"/>
            </div>

            <div className='flex flex-col gap-4'>
              <label htmlFor="case" className="text-red-500 text-2xl font-medium">Case</label>
              <input type="text" id="case" className="h-[70px] w-[60%]" />
              <label htmlFor="notes" className=" text-red-500 text-2xl font-medium">Notes</label>
              <textarea id="notes" cols="30" rows="10" />
              <button className="bg-green-500 w-[40%] text-white font-semibold text-2xl p-2">Submit</button>
            </div>
          </div>
        </div>

      
      </div>

      <div className="flex justify-between mx-[2%] mt-[5%]">
          <div>
            <button className="bg-red-500 p-2 text-white w-[100px] text-xl">Report</button>
          </div>

          <div className='flex items-center gap-4'>
            <button className="bg-green-500 p-2 text-white w-auto text-xl">Clock In</button>
            <button className="bg-red-500 p-2 text-white w-auto text-xl">Clock Out</button>
          </div>
        </div>
    </div>
  );
}

export default ShiftDetails;
