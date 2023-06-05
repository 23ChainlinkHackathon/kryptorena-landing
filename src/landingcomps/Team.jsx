import React from 'react'
import Roberto from '../img/roberto.png'
import LinkedIn from '../img/linkedin.png'
import Twitter from '../img/twitter.png'


const Team = () => {
  return (
    <div id="team" className="bg-[#181D0C] w-screen overflow-hidden h-[2800px] xl:h-[1500px] lg:h-[1900px] md:h-[2900px] flex gap-5 flex-col items-center justify-center">
      <h1 className=" relative  top-[20px] md:text-[48px] xsm:text-[32px] header self-stretch text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]"> Our Team</h1>
      <p className='md:text-[24px] xsm:text-[18px] text-white'>We're a global team made up of individuals from around the world!</p>
      <div className="flex flex-col lg:flex-row xl:flex-col lg:gap-10 gap-3 items-center justify-center">
          <div className="flex xl:flex-row xl:left-[35px] relative flex-col gap-3 lg:gap-5 items-center justify-center">

            <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] bg-blackhyj gap-3 flex xsm:flex-col items-start justify-center">
              <img className=" relative md:h-[395px] lg:w-[320px] lg:h-[320px] md:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
              <h1 className="text-[24px] text-[#F4DDB6]">Balendu</h1>
              <p className="text-[#F4DDB6] text-[18px]">Job title</p>
              <p className='text-white text-left lg:w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <div className="flex gap-4"> 
                <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                <img className="w-[24px]" src={Twitter} alt=""></img>
              </div>

            </div>
            <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] gap-3 flex xsm:flex-col items-start justify-center">
              <img className=" lg:w-[320px] lg:h-[320px]  md:h-[395px] md:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Roberto</h1>
                <p className="text-[#F4DDB6] text-[18px]">Chainlink Advocate</p>
                <p className=' text-white lg:w-[320px] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
            </div>

            <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] gap-3 flex xsm:flex-col items-start justify-center">
                <img className="  lg:w-[320px] lg:h-[320px] md:h-[395px] md:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Frank</h1>
                <p className="text-[#F4DDB6] text-[18px]">Artist | Chainlink Advocate</p>
                <p className=' text-white lg:w-[320px] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
            </div>

          </div>

        <div className="flex xl:left-[-180px] relative xl:flex-row flex-col gap-3 items-center justify-center">
          <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] gap-3 flex xsm:flex-col items-start justify-center">
                <img className="  lg:w-[320px] lg:h-[320px] md:h-[395px] md:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Eric</h1>
                <p className="text-[#F4DDB6] text-[18px]">Artist | Chainlink Advocate</p>
                <p className=' text-left lg:w-[320px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
          </div>
               
          <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] gap-3 flex xsm:flex-col items-start justify-center" >
                <img className=" lg:w-[320px] lg:h-[320px] md:h-[395px] md:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Daniel</h1>
                <p className="text-[#F4DDB6] text-[18px]">Artist | Chainlink Advocate</p>
                <p className=' text-left lg:w-[320px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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