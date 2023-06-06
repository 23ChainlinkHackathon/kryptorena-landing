import React from 'react'
import Sword from '../img/sword.png'
import Versus from '../img/versus.png'
import Levelup from '../img/levelup.png'
import Forge from '../img/forge.png'
import Icemage from '../img/icemage.png'

const How = () => {
  return (
    <div id="how" className='xsm:h-[1820px] lg:h-[700px] w-auto overflow-hidden  bg-[#0F0F0F] flex flex-col gap-5'>

      <h1 className=" relative lg:text-[48px] xsm:text-[42px] lg:mt-[30px] md:text-[72px] header self-stretch text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]">How it works</h1>
      <div className="flex lg:flex-row xsm:flex-col gap-10 justify-center items-center text-white"> 
        <div className='flex xsm:flex-col items-center gap-20 '>
          <div className='flex xsm:flex-col justify-items-center items-center'>
            <img className="h-[48px] w-[80px] " src={Forge} alt="Forge"></img>
            <h1 className="text-[24px] font-bold">
               Forge your Card
            </h1>
            <p className=' lg:text-left relative self-stretch md:text-[16px] leading-[24px] md:text-center text-left h-[72px] w-[240px]'>
            Each player will connect their Metamask wallet to generate a unique NFT card.
            </p>
          </div>

          <div className='flex xsm:flex-col items-center h-[282px]'>
            <img  className="h-[64px] w-[64px] "  src={Sword} alt="sword"></img>
            <h1 className="text-[24px] font-bold">
               Attack & Defence
            </h1>
            <p className='lg:text-left relative self-stretch leading-[24px] md:text-[16px] md:text-center text-left h-[72px] w-[240px]'>
            During each round,  you will have to choose attack or defend without knowing the opponent’s intention. After decisions have been made, both cards will be revealed.
            </p>
          </div>
        </div>

       <div className='h-[470px]'>
          <img  className='xsm:w-[290px] xsm:h-[440px] xl:h-[450px] xl:w-[300px]' src={Icemage} alt="Icemage"></img>  
       </div>

        <div className='flex relative lg:mt-[-30px]  xsm:flex-col items-center lg:gap-0 xsm:gap-20'>
          <div className='flex xsm:flex-col items-center gap-5 h-[282px]' >
            <img className="h-[37.29px] w-[64px] "  src={Versus} alt="Battle"></img>
            <h1 className="text-[24px] font-bold">
               Battle
            </h1>
            <p className='lg:text-left relative self-stretch md:text-[16px] leading-[24px] md:text-center text-left h-[72px] w-[240px]'>
            Each player starts with 10 health. 
If your damage score surpasses your opponent's defence score, the surplus power inflicts direct damage to their health pool. First to 0 health loses!
            </p>
          </div>

          <div className='flex xsm:flex-col items-center gap-5'>
              <img className="h-[64px] w-[64px] "  src={Levelup} alt="Level Up"></img>
              <h1 className="text-[24px] font-bold">
               Upgrade your Card
            </h1>
            <p className='relative lg:text-left self-stretch md:text-[16px] leading-[24px] md:text-center text-left h-[72px] w-[240px]'>
            Victory gives you points that will be randomly bestowed upon your NFT cards, unlocking more power for future encounters.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default How