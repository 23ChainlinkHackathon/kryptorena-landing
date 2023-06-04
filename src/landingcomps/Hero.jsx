import React from 'react'

const Hero = () => {
  return (
    <div className="w-screen  border-t-2 border-[#DFC28E] border-b-2  flex flex-col gap-10 xl:gap-2 items-center justify-center lg:h-[600px] md:h-[1133px] xl:h-[900px] xl:bg-[url('./img/heroxl.png')] lg:bg-[url('./img/herolg.png')] md:bg-[url('./img/hero2.png')] xsm:bg-[url('./img/hero1.png')] xsm:bg-cover   lg:bg-cover h-[800px] ">
      <h1 className='xl:h-[48px] xsm:w-[399px] xsm:font-600  md:text-[48px] text-[30px] xsm:
      h-[15px] text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]' >Kryptorena</h1>  
      <h1 className='xl:h-[60px] xsm:w-[399px] xsm:font-600 text-white xl:w-[768px] md:text-[60px] text-[40px] md:h-[160px] xsm:h-[96px]'>Collect, Battle, Upgrade</h1>

      <button className='bg-[#302D27] xl:top-10 ring-1 text-[24px] xl:h-[64px] xl:w-[176px] ring-[#BBA278] rounded-[8px] text-[#DFC28E] relative xsm:w-[140px] xsm:h-[40px] md:w-[160px] md:h-[50px]' > Play Game</button>
    </div>
  )
}

export default Hero