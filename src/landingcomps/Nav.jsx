import React from 'react'
import content from '../img/Content.png'

const Nav = () => {
  return (
    <div className=" w-screen  relative xsm:h-[70px] backdrop-blur-[12px] bg-black flex items-center justify center">
        <img src={content} alt={content} className="xsm:h-[24px] xsm:w-[48px] relative xsm:left-3"></img>
        <h1 className="xsm:left-5 relative text-white ">Kryptorena</h1>
        <button className='bg-[#514633] ring-1 ring-[#BBA278] rounded-[8px] text-white relative xsm:left-[80px] xsm:w-[140px] xsm:h-[40px]' > Play Game</button>
    
    </div>
  )
}

export default Nav