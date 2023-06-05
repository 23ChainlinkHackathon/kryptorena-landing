import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import content from '../img/Content.png'

const Nav = () => {
  return (
    <div className=" header w-screen overflow-hidden relative md:text-[24px] xsm:h-[70px] backdrop-blur-[12px]  bg-black flex items-center justify center">
        <img src={content} alt={content} className="xsm:h-[24px] xsm:w-[48px] relative md:left-[30px] xsm:left-3"></img>
        <h1 className="xsm:left-5 lg:hidden relative text-white md:left-[40px] ">Kryptorena</h1>
        <div className=" xsm:left-[-5800px] xsm:relative lg:visible lg:relative lg:left-[60px]">
          <ul className=' text-[16px] text-[#F4DDB6] flex gap-5 xl:gap-10'>
            <li><ScrollLink to="about" smooth={true} duration={500}>What is Kryptorena</ScrollLink></li>
            <li><ScrollLink to="how" smooth={true} duration={500}>How it Works</ScrollLink></li>
            <li><ScrollLink to="tech" smooth={true} duration={500}>Technology</ScrollLink></li>
            <li><ScrollLink to="team" smooth={true} duration={500}>Our Team</ScrollLink></li>
            <li><ScrollLink to="faq" smooth={true} duration={500}>FAQ</ScrollLink></li>

          </ul>
        </div>
        
        <button className="bg-[#514633] lg:left-[300px] text-[16px] xl:left-[1100px]  xsm:ml-[-250px] xsm:left-[-20px] h-[45px] ring-1 ring-[#BBA278] rounded-[8px] text-[#DFC28E] relative xsm:w-[250px] md:left-[130px] md:w-[137px] md:h-[47px] flex items-center justify-center">
  <p className="text-center">Play Game</p>
</button>

    
    </div>
  )
}

export default Nav