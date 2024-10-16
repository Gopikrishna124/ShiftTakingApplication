import React from "react";
import Navbar from "../../Components/Navabar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    // <div className='w-[360px] max-w-[360px] md:w-[100%] md:max-w-[100%]'>
    //   <Navbar/>
    //    <div className='w-[360px]  max-w-[360px] md:w-[80%] md:max-w-[80%] md:h-[calc(100vh-250px)] flex  flex-col md:flex-row md:justify-between md:items-center md:mx-[10%] md:my-auto'>
    //       <div className='w-[360px] md:w-[800px] md:h-[800px]'>
    //         <img src="https://res.cloudinary.com/dap91fhxh/image/upload/v1702289234/analytics-3680198_1280-removebg-preview_sgpfid.png" alt="image" className='w-[360px] h-[360px] md:w-[800px] md:h-[800px]'/>
    //       </div>

    //       <div className='md:w-[620px]'>
    //         <p className='font-medium text-slate-500 text-xl md:text-4xl my-3'>Empowering caregivers : </p>
    //         <p className='font-medium  text-slate-500 text-xl md:text-4xl my-3'>Compassion in Every Click</p>
    //         <button className='bg-[#94618E] w-[120px] h-[40px] md:w-[150px] md:h-[50px] rounded-md text-white md:text-xl mt-3 mb-3'>Get Started</button>
    //       </div>
    //    </div>
    //   <Footer/>
    // </div>

    <div className="w-[430px] max-w-[430px] md:w-[100%] md:max-w-[100%]">
      <Navbar />
      <div className="w-[430px]  max-w-[430px] md:w-[80%] md:max-w-[80%] h-[calc(100vh-220px)] md:h-[calc(100vh-250px)] flex  flex-col md:flex-row md:justify-between md:items-center md:mx-[10%] md:my-auto">
        <div className="w-[360px] md:w-[800px] md:h-[800px]">
          <img
            src="https://res.cloudinary.com/dap91fhxh/image/upload/v1702289234/analytics-3680198_1280-removebg-preview_sgpfid.png"
            alt="image"
            className="w-[360px] h-[360px] md:w-[800px] md:h-[800px]"
          />
        </div>

        <div className="md:w-[620px]">
          <p className="font-medium text-slate-500 text-xl md:text-4xl my-3">
            Empowering caregivers :{" "}
          </p>
          <p className="font-medium  text-slate-500 text-xl md:text-4xl my-3">
            Compassion in Every Click
          </p>
          <button className="bg-[#94618E] w-[120px] h-[40px] md:w-[150px] md:h-[50px] rounded-md text-white md:text-xl mt-3 mb-3">
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
