import React from 'react'

const Hero = () => {
  return (
    <div className="w-screen flex flex-col gap-10 items-center justify-center xsm:bg-[url('./img/hero1.png')] xsm:bg-cover lg:bg-[url('./img/hero.png')]  lg:bg-cover h-[800px] ">
      <h1 className='xsm:w-[399px] xsm:font-600  text-[30px] xsm:h-[15px] text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228, 172, 78, 0.6)]' >Kryptorena</h1>  
      <h1 className='xsm:w-[399px] xsm:font-600 text-white text-[40px] xsm:h-[96px]'>Collect, Battle, Upgrade</h1>

      <button className='bg-[#302D27] ring-1 ring-[#BBA278] rounded-[8px] text-[#DFC28E] relative xsm:w-[140px] xsm:h-[40px]' > Play Game</button>
    </div>
  )
}

export default Hero