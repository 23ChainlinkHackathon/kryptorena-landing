import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../img/Content.png';

const Nav = () => {
  return (
    <div className="header lg:w-auto w-screen relative md:text-[24px] xsm:h-[60px] backdrop-blur-[12px] bg-black flex  items-center justify-between">
      <div className="flex gap-7 items-center">

          <div className="flex gap-3 justify-center  items-center">
            <img src={content} alt={content} className="xsm:h-[20px] xsm:left-3 xsm:w-[44px] relative " />
            <h1 className="xsm:left-5 lg:hidden relative text-white md:left-[40px]">Kryptorena</h1>
          </div>
         
          <div>
              <ul className="hidden lg:flex text-[14px] text-[#F4DDB6]  gap-5 ">
                  <li>
                    <ScrollLink to="about" smooth={true} duration={500}>
                      What is Kryptorena
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="how" smooth={true} duration={500}>
                      How it Works
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="tech" smooth={true} duration={500}>
                      Technology
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="team" smooth={true} duration={500}>
                      Our Team
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="faq" smooth={true} duration={500}>
                      FAQ
                    </ScrollLink>
                  </li>
              </ul>
          </div>
         

      </div>
      
      
      <div className="xsm:visible pr-[20px] ">
      <a href="https://kryptorena.netlify.app/">
        <button className="bg-[#514633] text-[14px] ring-1 ring-[#BBA278] h-[40px] w-[105px] rounded-[8px] text-[#DFC28E]">
          <p className="text-center">Play Game</p>
        </button> </a>
      </div>
    </div>
  );
};

export default Nav;
