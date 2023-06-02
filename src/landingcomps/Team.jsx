import React from 'react'
import Roberto from '../img/roberto.png'
import LinkedIn from '../img/linkedin.png'
import Twitter from '../img/twitter.png'


const Team = () => {
  return (
    <div className="bg-[#181D0C] h-[2700px] flex items-center justify-center">
      <div className="flex flex-col  gap-3 items-center justify-center">
          <div className="flex  flex-col gap-3 items-center justify-center">

            <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] bg-blackhyj gap-3 flex xsm:flex-col items-start justify-center">
              <img className=" relative lg:h-[395px] lg:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
              <h1 className="text-[24px] text-[#F4DDB6]">Balendu</h1>
              <p className="text-[#F4DDB6] text-[18px]">Job title</p>
              <p className='text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              <div className="flex gap-4"> 
                <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                <img className="w-[24px]" src={Twitter} alt=""></img>
              </div>

            </div>
            <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] gap-3 flex xsm:flex-col items-start justify-center">
              <img className="  lg:h-[395px] lg:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Roberto</h1>
                <p className="text-[#F4DDB6] text-[18px]">Chainlink Advocate</p>
                <p className=' text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
            </div>

            <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] gap-3 flex xsm:flex-col items-start justify-center">
                <img className="  lg:h-[395px] lg:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Frank</h1>
                <p className="text-[#F4DDB6] text-[18px]">Artist | Chainlink Advocate</p>
                <p className=' text-white text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
            </div>

          </div>

        <div className="flex  flex-col gap-3 items-center justify-center">
          <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] gap-3 flex xsm:flex-col items-start justify-center">
                <img className="  lg:h-[395px] lg:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Eric</h1>
                <p className="text-[#F4DDB6] text-[18px]">Artist | Chainlink Advocate</p>
                <p className=' text-left text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="flex gap-4"> 
                  <img className=" w-[24px]" src={LinkedIn} alt=""></img>
                  <img className="w-[24px]" src={Twitter} alt=""></img>
                </div>
          </div>
               
          <div className=" relative xsm:h-[510px] lg:h-[564px] xsm:w-[295px] lg:w-[394.67px] gap-3 flex xsm:flex-col items-start justify-center" >
                <img className="  lg:h-[395px] lg:w-[395px] xsm:w-[295px] xsm:h-[295px] " src={Roberto} alt=""></img>
                <h1 className="text-[24px] text-[#F4DDB6]">Daniel</h1>
                <p className="text-[#F4DDB6] text-[18px]">Artist | Chainlink Advocate</p>
                <p className=' text-left text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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