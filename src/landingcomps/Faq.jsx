import React, { useState } from 'react';
import Qopen from '../img/qopen.png';

const Faq = (props) => {
  const [view, setView] = useState(null);

  function toggleAnswer(index) {
    setView((prevIndex) => (prevIndex === index ? null : index));
  }

  const questions = [
    "",
    " How is Chainlink VRF used in Kryptorena? ",
    "How is Chainlink Automation used? ",
    "How is Kryptorena helping bridge players from Web2 to Web3?",
    "What are the future plans for Kryptorena?",
    ""
  ];

  const answers = [
    "",
    "Chainlink VRF serves as a reliable mechanism for ensuring the authenticity of randomness during the generation and modification of users' attack and defense points, as well as for guaranteeing the issuance of a unique and unpredictable non-fungible token (NFT) upon user registration.",
    "Chainlink Automation in Kryptorena is currently under development and will be implemented in the near future. Its primary objective is to facilitate the detection of game rounds that have become 'stuck' and to assist in advancing the game by enforcing a change of turn. For instance, if a player fails to select an action within a specified timeframe, Chainlink Automation will intervene, advancing the game and resulting in a forfeiture for the non-responsive player.",
    "Kryptorena plays a crucial role in bridging players from Web2 to Web3 by providing a seamless transition and introducing them to the world of decentralized gaming. By leveraging the power of blockchain technology and integrating various Web3 components like Chainlink's VRF and soon Automation, Kryptorena enables players to experience the benefits of a decentralized ecosystem.",
    "Our team is looking forward to keep developing and improving Kryptorena in many ways. We plan on enhancing the user experience and adding more security and functionality. Furthermore we are looking for funding so that we may even further increase our reach in the community and the improve the game overall.",
    
    ""
  ];

  return (
    <div id="faq" className="lg:w-auto w-screen overflow-hidden justify-center xl:h-[600px] items-center bg-[#000000CC]  bg-cover max-h-[1200px] min-h-[438px] flex flex-col gap-5 ">
        <h1 className=" header relative lg:text-[48px] xsm:text-[32px] self-stretch lg:text-center xl:left-[420px] lg:left-[70px] lg:w-[480px] text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]">Frequently Asked Questions</h1>
      <div className=" flex justify-center items-center relative md:top-[50px]">
      <ul className="xsm:text-[24px] text-white  divide-[#DFC28E] lg:w-[900px] xl:w-[1200px] divide-y-[1px] justify-center items-center ">
        {questions.map((question, index) => (
          
          <div className=''>
            <li key={index} className="flex items-center justify-center w-[290px] xsm:w-[300px] gap-7">
            <div className=" relative  lg:text-left xl:left-[230px]">
              <p key={index} className={` ${view === index ? "opacity-10 relative bg-slate-600 left-[250px]":""} lg:w-[700px] text-[20px] xsm:text-[24px] text-white divide-y divide-[#DFC28E]`}>{question}</p>
              {view === index && (
                  
                    <p key={index} className={ ` ${view === index? "lg:left-[230px]  text-[#f5d8a6]": ""} relative left-[230px] w-[1200px]`}>{answers[index]}</p>
                    
      
                
              )}
            </div>
            <img
              key={index}
              onClick={() => toggleAnswer(index)}
              src={Qopen}
              alt="view"
              className={` ${question === ""? "hidden":"" } lg:relative  lg:left-[670px] ${view === index ? 'hidden' : 'visible'} w-[13px] h-[7px]  xsm:h-[10px] xsm:w-[15px]`}
            ></img>
            {view === index && (
              <button onClick={() => toggleAnswer(index)} className="lg:relative lg:left-[420px] visible">X</button>
            )}
          </li>
          </div>
        ))}
      </ul>
      </div>
     
    </div>
  );
}

export default Faq;




// import React, { useState } from 'react'
// import Qopen from '../img/qopen.png'


// const Faq = (props) => {

//     const [ view, setView] = useState(null)

//         function Theview(index){
//             setView((prevIndex) => (prevIndex === index ? null : index));
//         }
    

//     const questions = ["Question text goes here", "Question text goes here","Question text goes here","Question text goes here","Question text goes here"]
//     const answers =["Answer here", "Answer here","Answer here","Answer here", "Answer here"]
//     return (
//     <div className={` xsm:bg-[url('./img/mobfaq.png')] bg-cover max-h-[900px] min-h-[500px] flex justify-center items-center`}>

//         <ul className={`  xsm:text-[24px] text-white divide-y divide-[#DFC28E]`}>
//             {questions.map((question,index) =>(
//                     <li key={index} className=" flex items-center justify-center xsm:w-[300px] gap-3">
//                         <div>
//                         <p key={index} className="xsm:text-[24px] text-white divide-y divide-[#DFC28E]">{question}</p>
//                         {setView === index && (<span key={index} className={`  ${view? "hidden":"visible"} bg-slate-400 max-h-[600px]`}>{answers[index]}</span>) }
//                         </div>
//                         <img key={index} onClick={Theview} src={Qopen} alt="view" className={` ${view? "visible":"hidden"} xsm:h-[10px] xsm:w-[15px]`} ></img>
//                         {setView === index && (
//               <button onClick={() => setView(index)} className="visible">X</button>
//             )}
//                     </li>
//             ))}
//         </ul>
        
//         {/* <div className={` ${view? "hidden":"visible"} text-white xsm:bg-[url('./img/answerbox.png')]  ring-[20px]  ring-[#F4DDB6] rounded-[25px] bg-cover w-[300px] h-[400px]`}>
//             {answers.map((answer,index) =>(
//                <div key={index}>
//                     <p >{answer}</p>

//                </div> 
                
//             ))}
//             <button onClick={Theview}>close</button>
            
//         </div> */}


         
//     </div>
//   )
// }

// export default Faq