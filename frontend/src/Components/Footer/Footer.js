import React from 'react'

function Footer() {
  return (
    // <div className='h-[150px]  border-2 border-t-[#94618E]'>
    //     <div className='w-[360px] max-w-[360px] md:w-[80%] md:max-w-[80%] flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center  my-4 md:mx-[10%] md:my-4 '>
    //         <div className='w-[360px] md:w-[60%]'>
    //             <span className='text-sm  md:text-xl md:font-size-2xl text-[#94618E] font-medium text-justify'>
    //             Our mission is to provide personalized compassionate care that
    //         promotes inclusion and enhances the quality of life for individuals
    //         with disabilities.
    //              </span>
    //         </div>

    //         <div className='text-[#94618E] w-[360px]  max-w-[360px] md:w-[180px] md:max-w-[180px] text-sm my-4 md:text-md'>
    //         <p className='w-full'>Lightsview SA 5085</p>
    //         <p className='w-full'>+61 491 778 896</p>
    //         <p className='w-full'>info@amshifter.com</p>
    //         </div>
    //     </div>
    // </div>

    <div className='h-[150px]  border-2 border-t-[#94618E]'>
    <div className='w-[430px] max-w-[430px] md:w-[80%] md:max-w-[80%] flex flex-row gap-5 justify-between items-center md:gap-0 md:flex-row md:justify-between md:items-center  my-4 md:mx-[10%] md:my-4 '>
        <div className='w-[250px] md:w-[60%]'>
            <span className='text-sm  md:text-xl md:font-size-2xl text-[#94618E] font-medium text-justify'>
            Our mission is to provide personalized compassionate care that
        promotes inclusion and enhances the quality of life for individuals
        with disabilities.
             </span>
        </div>

        <div className='text-[#94618E] w-[200px]  max-w-[360px] md:w-[180px] md:max-w-[180px] text-[10px] md:text-sm my-4 md:text-md'>
        <p className='w-full'>Lightsview SA 5085</p>
        <p className='w-full'>+61 491 778 896</p>
        <p className='w-full'>info@amshifter.com</p>
        </div>
    </div>
</div>
  )
}

export default Footer