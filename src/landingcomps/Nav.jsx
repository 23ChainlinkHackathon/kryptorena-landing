import React from 'react'
import content from '../img/Content.png'

const Nav = () => {
  return (
    <div className=" w-screen overflow-hidden relative md:text-[24px] xsm:h-[70px] backdrop-blur-[12px]  bg-black flex items-center justify center">
        <img src={content} alt={content} className="xsm:h-[24px] xsm:w-[48px] relative md:left-[30px] xsm:left-3"></img>
        <h1 className="xsm:left-5 lg:hidden relative text-white md:left-[40px] ">Kryptorena</h1>
        <div className="xsm:invisible lg:visible lg:relative lg:left-[60px]">
          <ul className=' text-[16px] text-[#F4DDB6] flex gap-5 xl:gap-5'>
            <li>What is Kryptorena</li>
            <li>How it Works</li>
            <li>Technology</li>
            <li>Our Team</li>
            <li>FAQ</li>
          </ul>
        </div>
        
        <button className='bg-[#514633] lg:left-[300px] md:left-[445px] xl:left-[580px] ring-1 ring-[#BBA278] rounded-[8px] text-white relative xsm:left-[80px] xsm:w-[140px] xsm:h-[40px]' > Play Game</button>
    
    </div>
  )
}

export default Nav