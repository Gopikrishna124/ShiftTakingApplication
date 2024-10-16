import React, { useState } from "react";
import { FaArrowLeft, FaLandmark } from "react-icons/fa";

function Report() {
  const [show ,setShow]=useState(false)
  return (
    <div className="top-0 left-0  right-0 h-auto w-full flex items-center">
      <div className="mx-[15%] my-[3%] ">
        <div className="flex items-center gap-3 text-2xl my-4 text-[#94618E] ">
          <FaArrowLeft /> <span>Back</span>
        </div>

        <div>
          <p className="text-3xl text-red-500 font-semibold">
            Report Incidence
          </p>
          <hr className="border-slate-700 w-[90%]" />
        </div>

        <div>
          <form className="text-[#94618E] text-xl font-semibold">
            <div className="w-[600px] h-[50px] my-[2%]">
              <label htmlFor="date">Date of Incidence</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="01/01/2024"
                  className=" w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="Time">Time of Incidence</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="Time"
                  name="Time"
                  placeholder="08:00 AM"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="location">
                Location(e.g. kitchen,Lounge ,etc)
              </label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="location"
                  placeholder="kitchen"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="">Person Completing Form</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  name="Person Completing Form"
                  placeholder="James Wood"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="Address">Address Of Location</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  id="Address"
                  name="Address Of Location"
                  placeholder="**Sydney Opera House** Bennelong Point, Sydney, NSW 20002 "
                  className="w-full h-full placeholder:text-lg "
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="">Person Affected In Incidence</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  name="Person Affected"
                  placeholder="john Wood"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="">
                Were there other person(s) present(witness) at this time of
                incident ? Yes or No?
              </label>
              <div className="w-full h-full my-3">
                <input type="checkbox" className="mr-2 placeholder:text-lg-" onClick={()=>setShow(!show)} />
                <span>Yes</span>

                <input
                  type="checkbox"
                  className=" mr-2 ml-[2%] placeholder:text-lg"
                />
                <span>No</span>
              </div>
            </div>
               
            { 
            show &&
            <div className="">
              <div className="w-[600px] h-[50px] my-[17%]">
                <label htmlFor="">Person 1</label>
                <div className="w-full h-full">
                  <input
                    type="text"
                    placeholder="alex"
                    name="Person 1"
                    className="w-full h-full mb-4"
                  />
                  <div className="w-full h-full">
                    <input
                      type="text"
                      placeholder="+91242323"
                      name="Phone 1"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[600px] h-[50px] my-[17%]">
                <label htmlFor="">Person 2</label>
                <div className="w-full h-full">
                  <input
                    type="text"
                    placeholder="alex"
                    name="Person 2"
                    className="w-full h-full mb-3"
                  />
                  <div className="w-full h-full">
                    <input
                      type="text"
                      placeholder="+91242323"
                      name="Phone 2"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[600px] h-[50px] my-[17%]">
                <label htmlFor="">Person 3</label>
                <div className="w-full h-full">
                  <input
                    type="text"
                    placeholder="alex"
                    name="Person 3"
                    className="w-full h-full mb-3"
                  />
                  <div className="w-full h-full">
                    <input
                      type="text"
                      placeholder="+91242323"
                      name="Phone 3"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

           }

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="">Who was injured(if anyone)</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  name="person injured"
                  placeholder="john Wood"
                  className="w-full h-full placeholder:text-lg"
                />
              </div>
            </div>

            <div className="w-[600px] h-[150px] my-[15%]">
              <label htmlFor="">Type Of Incidence</label>
              <div className="w-full h-full flex flex-col gap-2 my-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-[50px]  ml-[2%] placeholder:text-lg"  />
                  <span>Act Of Violence</span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className=" w-[50px] ml-[2%] placeholder:text-lg"
                  />
                  <span>Property Damaged</span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className=" w-[50px] ml-[2%] placeholder:text-lg"
                  />
                  <span>Accident</span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-[50px] ml-[2%] placeholder:text-lg"
                  />
                  <span>Behavioural</span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className=" w-[50px] ml-[2%] placeholder:text-lg"
                  />
                  <span>Other</span>
                </div>
              </div>
            </div>

            <div className="w-[600px]  my-[9%]">
              <label htmlFor="">Details Of Incident</label>

              <div>
                <textarea
                  name="what happened"
                  cols="30"
                  rows="10"
                  className="w-[600px] mt-2"
                  placeholder="Describe what happened before incident"
                />
              </div>

              <div>
                <textarea
                  name="actual incident"
                  cols="30"
                  rows="10"
                  className="w-[600px]"
                  placeholder=" Describe actual incident/Behavioural"
                />
              </div>

              <div>
                <textarea
                  name="after incident"
                  cols="30"
                  rows="10"
                  className="w-[600px]"
                  placeholder=" what happened after incident,detail your actions"
                ></textarea>
              </div>
            </div>
         
               

            <div className="w-[600px]  h-[50px] my-[9%]">
              <label htmlFor="">Report By</label>
              <div className="w-full h-full">
                <input type="text" name="reportBy" className="w-full h-full" />
              </div>
            </div>

            <div className="w-[600px] h-[50px]  my-[9%]">
              <label htmlFor="">Date of report</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  name="date of report"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="w-[600px] h-[50px] my-[9%]">
              <label htmlFor="">Title/role of person reporting</label>
              <div className="w-full h-full">
                <input
                  type="text"
                  name="role of person"
                  className="w-full h-full"

                />
              </div>
            </div>

            <div className="w-[550px] h-[50px] my-[9%]">
              <button className="bg-red-500 text-white w-full h-full rounded-md text-2xl ">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Report;
