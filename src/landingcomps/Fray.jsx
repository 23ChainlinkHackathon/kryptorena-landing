import React from 'react'

const Fray = () => {
  return (
    <div className="xsm:bg-[url('./img/fray.png')] bg-cover max-h-[1200px]  min-h-[700px] flex flex-col gap-5 justify-center items-center">
        <h1 className='className=" relative lg:text-[48px] xsm:text-[32px] self-stretch text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]'>Enter the fray</h1>
        <p className='text-white'>lorem ipsum dmus error quisquam? Nemo, ea minima delectus qui sint at voluptatem voluptatum enim ad facere? Ipsa optio soluta nisi? Expedita, aut.</p>
        <button className='bg-[#514633] ring-1 ring-[#BBA278] rounded-[8px] text-white xsm:left-[80px] xsm:w-[140px] xsm:h-[40px]' > Play Game</button>
    </div>
  )
}

export default Fray