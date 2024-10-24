import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { GiJusticeStar } from 'react-icons/gi';

const API_KEY = 'AIzaSyBT2LQbtw18Yhjii-gGgLznTbceH2s-Xps'; // replace with a valid API key

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // Store chat history
  const [isResponseScreen, setIsResponseScreen] = useState(false);

  const hitRequest = async () => {
    if (message) {
      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(message);

        const responseText = await result.response.text(); // Await the result to avoid promise

        const newMessages = [
          ...messages,
          { type: 'user', text: message }, // User message
          { type: 'responseMessage', text: responseText }, // AI response
        ];

        setMessages(newMessages);
        setIsResponseScreen(true);
        setMessage(''); // Reset input field after sending
      } catch (error) {
        console.error('Error generating response:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Please enter a message before sending.');
    }
  };

  // Helper function to determine if the message is code
  const isCodeResponse = (text) => {
    return text.startsWith('```') && text.endsWith('```');
  };

  const handleNewChat = () => {
    setMessages([]); // Clear chat history
    setIsResponseScreen(false); // Return to the initial screen
  };

  // New function to handle key down events
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default action (like a form submission)
      hitRequest(); // Call the function to send the message
    }
  };

  return (
    <div className="container w-screen min-h-screen overflow-hidden bg-[#0E0E0E] text-white flex flex-col">
      <div className="logo">
        <h3 className="font-bold text-[#d4cdcf] pl-[25px] pt-[15px] cursor-pointer text-2xl">
          <big>IdeaGpt</big>
        </h3>
      </div>

      {isResponseScreen ? (
        <div className="h-[calc(100vh-150px)] flex flex-col">
          <div className="header pt-[15px] flex items-center justify-between w-full px-[200px]">
            <h2 className="text-2xl flex items-center">
              <GiJusticeStar className="mr-2 text-blue-500 pr-[5px]" />
              Hello there! How can I help you today?
            </h2>
            <button
              id="NewChatBtn"
              className="bg-[#181818] p-[10px] rounded-[30px] cursor-pointer text-[14px] px-[20px]"
              onClick={handleNewChat} // Clear chat history
            >
              New Chat
            </button>
          </div>
          <div className="messages w-[65%] mx-auto mt-8 overflow-y-auto flex-grow">
            {messages.map((messageItem, index) => (
              <div
                key={index}
                className={`mb-4 rounded-md ${
                  messageItem.type === 'user'
                    ? 'bg-[#1F1F1F] mr-[13px] text-right self-end ml-auto p-2 text-sm max-w-[40%] rounded-2xl mb-6 pl-2' // User message styling
                    : 'bg-[#292929] text-left self-start mr-auto p-4 max-w-[65%] rounded-2xl mb-4' // Adjusted width for AI response
                }`}
              >
                {messageItem.type === 'responseMessage' && (
                  <GiJusticeStar className="mr-2 text-blue-500 pr-[5px]" />
                )}
                {isCodeResponse(messageItem.text) ? (
                  <pre className="text-green-300">
                    {messageItem.text.replace(/```/g, '')} {/* Remove the ``` markers */}
                  </pre>
                ) : (
                  messageItem.text
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="middle h-[70vh] flex items-center flex-col justify-center">
          <h1 className="text-4xl">
            <b>Hello</b>, How Can I Help You Today?
          </h1>
          <div className="boxes mt-[30px] flex items-center gap-2">
            {/* Cards */}
          </div>
        </div>
      )}

      <div className="bottom w-full flex flex-col items-center">
        <div className="InputBox w-[65%] text-[15px] py-[7.4px] flex items-center bg-[#181818] rounded-[30px]">
          <input
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown} // Add key down event handler
            type="text"
            className="p-[10px] pl-[15px] bg-transparent flex-1 outline-none border-none"
            placeholder="Write Your Message Here ..."
            id="messageBox"
            value={message} // Bind input value to state
          />
          {message !== "" && (
            <i className="text-green-500 text-[20px] mr-5 cursor-pointer" onClick={hitRequest}>
              <BiSend />
            </i>
          )}
        </div>

        <p className="text-[gray] text-[14px] my-11">
          <b>IdeaGpt</b> is Developed By <b>Amit Kumar Patra</b>. IdeaGpt can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default App;
