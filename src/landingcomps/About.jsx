import React from 'react';
import placeholder1 from '../img/placeholder1.png';
import placeholder2 from '../img/placeholder2.png';
import placeholder3 from '../img/placeholder3.png';

const About = (props) => {
  const imgs = [placeholder1,placeholder2,placeholder3];
  
  const title2 = "Battle with friends and foes";
  const text2 = "Clash with fellow players in real-time battles or host your own matches and play with friends.";
  const titles = ["Unique Cards", title2, "Power up your Card"];
  const texts = [
    "Connect your wallet to generate\na unique battle card",
    text2,
    "Gain new level when powers combine"
  ];

  return (
    <div id="about" className="w-auto overflow-hidden bg-[#0F0F0F] lg:h-[900px] md:h-[2300px] xsm:h-[1700px] gap-5 text-white flex xsm:flex-col items-center justify-center">
      <h1 className="header text-[#F4DDB6] leading-[72px] md:text-[45px] xsm:text-[32px]  drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]">What is Kryptorena</h1>
      <p className='text-center lg:w-[450px] xsm:w-[300px] md:text-[16px]'>Experience a thrilling NFT-based card game where players can unleash their unique NFT cards against opponents in a fun battle based system.</p>
      <ul className="flex xsm:flex-col lg:flex-row gap-8">
        {titles.map((title, index) => (
          <li key={index} className="  xsm:w-[325px] xsm:h-[440px]  lg:w-[280px] lg:h-[410px] md:w-[405.33px] md:h-[626px] flex xsm:flex-col gap-2 justify-center items-center bg-[#242424] ring-1 rounded-[8px] ring-[#F4DDB6] h-[405.33px]">
            <img className=' xsm:w-[290px] xsm:h-[300px] lg:h-[250px] lg:w-[200px] md:h-[450px] md:w-[362.16px] rounded-[4px]' src={imgs[index]} alt={`Placeholder ${index + 1}`}  />
            <h2 className='text-[22px] text-[#F4DDB6] md:text-[20px]'>{title}</h2>
            <p className= {`text-[12px] ${title === titles[0]? "xl:w-[220px]":""} xl:w-[357.33px] xl:h-[48px] leading-[24px] lg:w-[230px] ${title === title2? "xsm:w-[290px] xsm:h-[48px] lg:w-[220px] xl:w-[270px] md:text-[12px] md:w-[357.33px] xsm:text-[14px]" : "xsm:text-[14px] text-center justify-center md:text-[12px] md:w-[357.33px] xsm:w-[280px]"}`}>{texts[index]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
