import React from 'react'

const Hero = () => {
  return (
    <div id="hero" className="lg:w-auto w-screen header border-t-2 border-[#DFC28E] border-b-2  flex flex-col gap-10 lg:gap-2 items-center justify-center xl:h-[700px] md:h-[1133px] lg:h-[600px] xl:bg-[url('./img/heroxl.png')] lg:bg-[url('./img/herolg.png')] md:bg-[url('./img/hero2.png')] bg-[url('./img/hero1.png')] bg-cover   lg:bg-cover h-[800px] ">
      <h1 className='header lg:h-[40px] w-[399px] xsm:font-600  md:text-[40px] text-[30px] xsm:
      h-[15px] text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]'>Kryptorena</h1>  
      <h1 className='header lg:h-[60px] w-[399px] font-600 text-white md:h-[70px] xl:w-[768px] md:text-[60px] md:w-[800px] text-[40px]  xsm:h-[96px]'>Collect, Battle, Upgrade</h1>
      <a href="https://kryptorena.netlify.app/">
      <button className='bg-[#302D27] lg:top-10 ring-1 text-[20px] xl:h-[50px] xl:w-[156px] ring-[#BBA278] rounded-[8px] text-[#DFC28E] relative w-[140px] h-[40px] md:w-[160px] md:h-[50px]' > Play Game</button>

      </a>
          </div>
  )
}

export default Hero