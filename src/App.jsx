import React, { useState } from 'react';
import { BiSend } from "react-icons/bi";
import { GiJusticeStar } from "react-icons/gi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { TbBrandPython, TbMessageChatbot, TbPlanet } from "react-icons/tb";

import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [isResponseScreen, setIsResponseScreen] = useState(true);

  return (
    <>  
      <div className="container w-screen min-h-screen overflow-x-hidden bg-[#0E0E0E] text-white">
        <div className="logo">
          <h3 className="font-bold text-[#d4cdcf] pl-[25px] pt-[15px] cursor-pointer text-2xl ">
            <big>IdeaGpt</big>
          </h3>
        </div>

      {/* 2nd screen start */}

        {
          isResponseScreen ?
            <div className='h-[74vh] '>

              <div className="header pt-[15px] flex items-center justify-between w-[100vw] px-[200px] ">
                
          

          <h2 className='text-2xl flex items-center'><GiJusticeStar className="mr-2 text-blue-500 pr-[5px]" /> Hello there! How can I help you today? Feel free to ask me anything. 😊</h2>

          <button id='NewChatBtn' className='bg-[#181818] p-[10px] rounded-[30px] curser-pointer text-[14px] px-[20px] '>New Chat</button>
              </div>

            </div> 
          : 
            <div className="middle h-[70vh] flex items-center flex-col justify-center">
              <h1 className="text-4xl"><b>Hello</b>, How Can I Help You Today?</h1>
              <div className="boxes mt-[30px] flex items-center gap-2">
                {/* card 1 */}
                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#5e5f61] px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px]">
                  <p className='text-[18px]'>What Is Coding?<br />
                    How We Can Learn It.
                    <i className='absolute right-3 bottom-3 text-[18px]'><IoCodeSlashSharp /></i>
                  </p>
                </div>

                {/* card 2 */}
                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#5e5f61] px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px]">
                  <p className='text-[18px]'>Which Is the <br />
                    Red planet of the solar system?
                    <i className='absolute right-3 bottom-3 text-[18px]'><TbPlanet /></i>
                  </p>
                </div>

                {/* card 3 */}
                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#5e5f61] px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px]">
                  <p className='text-[18px]'>In Which Year <br />
                    Python was Invented?
                    <i className='absolute right-3 bottom-3 text-[18px]'><TbBrandPython /></i>
                  </p>
                </div>

                {/* card 4 */}
                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#5e5f61] px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px]">
                  <p className='text-[18px]'>How We Can Use <br />
                    AI for Adoption?
                    <i className='absolute right-3 bottom-3 text-[18px]'><TbMessageChatbot /></i>
                  </p>
                </div>
              </div>
            </div>
        }

        <div className="bottom w-[100%] flex flex-col items-center">
          <div className="InputBox w-[65%] text-[15px] py-[7.4px] flex items-center bg-[#181818] rounded-[30px]">
            <input 
              onChange={(e) => setMessage(e.target.value)} 
              type="text" 
              className='p-[10px] pl-[15px] bg-transparent flex-1 outline-none border-none' 
              placeholder="Write Your Message Here ..." 
              id='messageBox'
            />

            {message === "" ? "" : <i className='text-green-500 text-[20px] mr-5 cursor-pointer'><BiSend /></i>}
          </div>

          <p className='text-[gray] text-[14px] my-11'>
            <b>IdeaGpt</b> is Developed By <b>Amit Kumar Patra</b>. This AI uses the Gemini API for responding.
          </p>
        </div>
      </div>
    </>
  )
}

export default App;
