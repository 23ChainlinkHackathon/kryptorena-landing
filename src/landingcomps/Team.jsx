import React from 'react'
import Roberto from '../img/roberto.png'
import Eric from '../img/eric.png'
import Frank from '../img/frank.png'
import Balendu from '../img/balendu.png'
import Dan from '../img/dan.png'
import LinkedIn from '../img/linkedin.png'
import Twitter from '../img/twitter.png'


const Team = () => {
  return (
    <div id="team" className="bg-[#0F0F0F] lg:w-auto w-screen overflow-hidden h-[2800px] xl:h-[1500px] lg:h-[1900px] md:h-[2900px] flex gap-5 flex-col items-center justify-center">
      <h1 className=" relative  top-[20px] md:text-[48px] text-[32px] header self-stretch text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]"> Our Team</h1>
      <p className='md:text-[24px] text-[18px] text-white'>We're a global team made up of individuals from around the world!</p>
      <div className="flex flex-col lg:flex-row xl:flex-col lg:gap-10 xms:gap-3 gap-10 items-center justify-center">
          <div className="flex xl:flex-row xl:left-[35px] relative flex-col gap-10 lg:gap-5 items-center justify-center">

            <div className=" relative h-[510px] lg:h-[564px] w-[295px] lg:w-[394.67px] gap-2 flex flex-col items-start justify-center">
              <img className=" relative md:h-[395px] lg:w-[280px] lg:h-[280px] md:w-[395px] w-[295px] h-[295px] " src={Balendu} alt=""></img>
              <h1 className="text-[24px] text-[#F4DDB6]">Balendu</h1>
              <p className="text-[#F4DDB6] text-[18px]">Full Stack Developer | Chainlink Advocate</p>
              <p className='text-white text-left lg:w-[280px]'>Young, Passionate, Anime Lover, Gamer.</p>
              <div className="flex gap-4"> 
                <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                <img className="w-[24px]" src={Twitter} alt=""></img>
              </div>

            </div>
            <div className=" relative h-[510px] lg:h-[564px] xl:pt-[50px] w-[295px] lg:w-[394.67px] gap-2 flex flex-col items-start justify-center">
              <img className=" lg:w-[280px] lg:h-[280px]  md:h-[395px] md:w-[395px] w-[295px] h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Roberto</h1>
                <p className="text-[#F4DDB6] text-[18px]"> Backend Developer | Chainlink Advocate</p>
                <p className=' text-white lg:w-[300px] text-left'>Experienced Solidity engineer and blockchain enthusiast. Chainlink community advocate, passionate about Web3 and love building products!</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
            </div>

            <div className=" relative h-[510px] xl:pt-[0px] lg:h-[564px] w-[295px] lg:w-[394.67px] gap-2 flex flex-col items-start justify-center">
                <img className="  lg:w-[280px] lg:h-[280px]  w-[295px] h-[295px] " src={Frank} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Frank</h1>
                <p className="text-[#F4DDB6] text-[18px]">Artist | Chainlink Advocate</p>
                <p className=' text-white lg:w-[320px] text-left'>Founder of Dreamxrs - global artist collective</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
            </div>

          </div>

        <div className="flex xl:left-[-180px] relative xl:flex-row flex-col gap-10 xsm:gap-10 items-center justify-center">
          <div className=" relative h-[510px] lg:h-[564px] w-[295px]  lg:w-[394.67px] gap-2 flex flex-col items-start justify-center">
                <img className="  lg:w-[280px] lg:h-[280px]  w-[295px] h-[295px] " src={Eric} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Eric</h1>
                <p className="text-[#F4DDB6] text-[18px]">UX Designer | Chainlink Advocate </p>
                <p className=' text-left lg:w-[305px] text-white'>Always learning, always growing. Seeking to delight users with human-centric products that pushes humanity forward.</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
          </div>
               
          <div className=" relative h-[510px] lg:h-[564px] xl:pt-[50px] w-[295px] lg:w-[394.67px] gap-2 flex-flex col items-start justify-center" >
                <img className=" lg:w-[280px] lg:h-[280px]  w-[295px] h-[295px] " src={Dan} alt=""></img>
                <h1 className="text-[24px] text-left text-[#F4DDB6]">Daniel</h1>
                <p className="text-[#F4DDB6] text-left text-[18px]">Front End Developer | Web3</p>
                <p className=' text-left lg:w-[320px] text-white'>Interested in anything blockchain and music.</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
          </div>
        </div>


          
      </div>
    </div>
  )
}

export default Team