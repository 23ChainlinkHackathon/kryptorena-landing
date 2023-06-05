import React from 'react'

const Fray = () => {
  return (
    <div id="fray" className="w-screen overflow-hidden xsm:bg-[url('./img/fray.png')] lg:bg-[url('./img/fraylg.png')] md:bg-[url('./img/fraymd.png')] bg-cover  h-[438px] flex flex-col gap-5 justify-center items-center">
        <h1 className='header relative lg:text-[48px] xsm:text-[32px] self-stretch text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]'>Enter the fray</h1>
        <p className='text-white lg:text-[18px] '> Fantasy is create</p>
        <button className='bg-[#514633] header ring-1 ring-[#BBA278] rounded-[8px] text-[#DFC28E] xsm:left-[80px] xsm:w-[140px] xsm:h-[40px]' > Play Game</button>
    </div>
  )
}

export default Fray