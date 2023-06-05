import React, { useState } from 'react';
import Qopen from '../img/qopen.png';

const Faq = (props) => {
  const [view, setView] = useState(null);

  function toggleAnswer(index) {
    setView((prevIndex) => (prevIndex === index ? null : index));
  }

  const questions = [
    "",
    "Question text goes here",
    "Question text goes here",
    "Question text goes here",
    "Question text goes here",
    "Question text goes here",
    ""
  ];

  const answers = [
    "",
    "Answer here",
    "Answer here fsdghjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg",
    "Answer here",
    "Answer here",
    "Answer here",
    ""
  ];

  return (
    <div id="faq" className="w-screen overflow-hidden xsm:bg-[url('./img/mobfaq.png')] justify-center xl:h-[790px] xl:bg-[url('./img/faqxl.png')] md:bg-[url('./img/faqmd.png')] md:h-[450px] bg-cover max-h-[1200px] min-h-[500px] flex flex-col gap-5 ">
        <h1 className=" header relative lg:text-[48px] xsm:text-[32px] self-stretch lg:text-left xl:left-[100px] lg:left-[70px] lg:w-[480px] text-[#F4DDB6] drop-shadow-[0_4px_16px_rgba(228,172,78,0.6)]">Frequently Asked Questions</h1>
      <div className=" flex justify-center items-center relative md:top-[50px]">
      <ul className="xsm:text-[24px] text-white  divide-[#DFC28E] lg:w-[900px] xl:w-[1200px] divide-y-[1px] justify-center items-center ">
        {questions.map((question, index) => (
          
          <div className=''>
            <li key={index} className="flex items-center justify-center xsm:w-[300px] gap-7">
            <div className=" ">
              <p key={index} className="xsm:text-[24px] text-white divide-y divide-[#DFC28E]">{question}</p>
              {view === index && (
                <div key={index} className="max-w-[300px] max-h-[200px] overflow-hidden">
                  <div
                    className="max-w-[300px] relative"
                    style={{ maxHeight: '200px', overflow: 'auto', paddingRight: '12px' }}
                  >
                    {answers[index]}
                  </div>
                </div>
              )}
            </div>
            <img
              key={index}
              onClick={() => toggleAnswer(index)}
              src={Qopen}
              alt="view"
              className={` ${question === ""? "hidden":"" } lg:relative xl:left-[900px] lg:left-[600px] ${view === index ? 'hidden' : 'visible'} xsm:h-[10px] xsm:w-[15px]`}
            ></img>
            {view === index && (
              <button onClick={() => toggleAnswer(index)} className="lg:relative lg:left-[600px] visible">X</button>
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