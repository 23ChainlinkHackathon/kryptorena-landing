import React from 'react'
import Content from '../img/Content.png'

const Footer = () => {
  return (
    <div className=" w-screen overflow-hidden flex items-center justify-center bg-black ">
        <div className="xsm:h-[300PX] md:h-[210px]  divide-y-[1px] gap-7 md:w-[800px] divide-[#A8916B] flex flex-col">
        <div className="divide-y-[1px]">
                <ul className="xsm:flex  md:gap-8 md:flex-row text-[20px] relative top-3 xsm:flex-col justify-center items-center text-[#FCF7ED]">
                <li>
                What is Kryptorena
                </li>
                <li>
                    How it Works
                </li>
                <li className='invisible md:visible'>
                    Technology 
                </li>
                <li className='invisible md:visible'>
                    Our Team
                </li>
                <li >
                    FAQ 
                </li>
            </ul>
        </div>

        <div className=" flex xsm:flex-col xsm:gap-4  md:flex-row  md:flex relative   md:justify-center text-[#FCF7ED]">
            <div className="flex flex-col justify-center relative md:left-[-150px] xsm:top-5 items-center">
                <img src={Content} alt="" className="xsm:h-[24px] xsm:w-[48px] relative "></img>
                <p>Made with ❤️ by Kryptorena team</p>
            </div>

            <div className='md:relative md:left-[140px] md:top-10'>
                Chainlink Hackathon 2023
            </div>
        </div>
        
         
        </div>
        
    </div>
  )
}

export default Footer