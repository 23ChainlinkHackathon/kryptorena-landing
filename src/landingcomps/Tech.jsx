import React from 'react'
import VRF from '../img/vrf.png'
import Sol from '../img/sol.png'
import IPFS from '../img/ipfs.png'
import ReactIcon from '../img/react.png'
import Automation from '../img/auto.png'
import Sea from '../img/sea.png'

const Tech = () => {
  return (
    <div id="tech" className=" xl:flex-row xl:gap-[120px] xl:items-center overflow-hidden lg:w-auto w-screen xl:justify-center md:h-[950px] xl:h-[631.67px] h-[900px] lg:h-[600px] md:bg-[url('./img/techmd.png')] xl:bg-[url('./img/techxl.png')] xsm:bg-[url('./img/techmob1.png')] lg:bg-[url('./img/techxl.png')] lg:gap-0 lg:space-x-[-10px] bg-cover xsm:flex-col flex items-center gap-6 justify-center">
      <div>  <h1 className=" header relative lg:top-[-30px] xl:top-0 items-center justify-center md:text-[48px] xsm:text-[32px] self-stretch text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]">Technologies Used</h1>
 </div>
          
      <div className = "flex xsm:flex-col gap-5 lg:flex-row">
          <div className="flex-col gap-3 flex ">
              
            <div className ="bg-[#191510] h-[144px] w-[300px] ring-1 ring-[#F4DDB6] rounded-[8px] flex flex-col items-center justify-center">
              <img className=" relative h-[48px] w-[56px] " src={VRF} alt=""></img>
              <p className="text-[#F4DDB6] text-[24px] leading-[32px]"> Chainlink VRF</p>

            </div>

            <div className ="bg-[#191510] h-[112px] w-[300px] ring-1 ring-[#F4DDB6] rounded-[8px] flex flex-col items-center justify-center">
              <img className=" relative h-[48px] w-[48px] " src={Sea} alt=""></img>
              <p className="text-[#F4DDB6] text-[24px] leading-[32px]"> OpeanSea</p>

            </div >
            <div className ="bg-[#191510] h-[112px] w-[300px] ring-1 ring-[#F4DDB6] rounded-[8px] flex flex-col items-center justify-center">
              <img className=" relative h-[48px] w-[48px] " src={Sol} alt=""></img>
              <p className="text-[#F4DDB6] text-[24px] leading-[32px]"> Solidity</p>
            </div>
          
        </div>
        <div className="flex-col gap-3 flex">
          
            <div className ="bg-[#191510] h-[144px] w-[300px] ring-1 ring-[#F4DDB6] rounded-[8px] flex flex-col items-center justify-center">
              <img className=" relative h-[48px] w-[56px] " src={Automation} alt=""></img>
              <p className="text-[#F4DDB6] text-center w-[259px] text-[24px] leading-[32px]"> Chainlink Automation 
(TBD)</p>
            </div>
            <div className ="bg-[#191510] h-[112px] w-[300px] ring-1 ring-[#F4DDB6] rounded-[8px] flex flex-col items-center justify-center">
              <img className=" relative h-[55.67px] w-[48px] " src={IPFS} alt=""></img>
              <p className="text-[#F4DDB6] text-[24px] leading-[32px]"> IPFS System</p>
            </div>
            <div className ="bg-[#191510] h-[112px] w-[300px] ring-1 ring-[#F4DDB6] rounded-[8px] flex flex-col items-center justify-center">
              <img className=" relative h-[48px] w-[48px] " src={ReactIcon} alt=""></img>
              <p className="text-[#F4DDB6] text-[24px] leading-[32px]"> React</p>
            </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Tech