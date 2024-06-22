import React from "react";
// import { IoIosMenu } from "react-icons/io"; 
import { CiSearch } from "react-icons/ci";
import { TbAlertTriangleFilled } from "react-icons/tb";
// import { TiArrowForward } from "react-icons/ti";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TbSend2 } from "react-icons/tb";
import { IoChevronBack } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

// import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import '../styles/chatbotsidecol.css';


export const ChatbotSidecol = () => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
  //   script.async = true;
  //   script.onload = () => {
  //     window.watsonAssistantChatOptions = {
  //       integrationID: "b8e252de-aa6a-442c-b7c1-919b7833ea65", 
  //       region: "us-south", 
  //       serviceInstanceID: "ab37157b-7f3c-4b36-b062-bc1864d28e74", 
  //       onLoad: async (instance) => { await instance.render(); }
  //     };
  //   };
  //   document.head.appendChild(script);

  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);




  
  return (
    <div className="chatbot-sidecol">
      <div className="div">
        <div className="search">
          <div className="overlap-group">
          <CiSearch className="img" color="#7E7E7E"/>
            <div className="text-wrapper">Search</div>
           
          </div>
        </div>
        <div className="sidebar">
          <div className="frame">
            <div className="image-wrapper">
              <img className="image" alt="Image" src="parto.png" />
            </div>
            {/* <div className="outline-essentional-wrapper">
           
            <Link to="/" className="outline-essentional ">
           <IoIosMenu color="#010101"/>
            </Link>

           
            </div> */}
<a href="/Chatbot">
            <div className="">
              <img className="outline-essentional" alt="Outline essentional" src="menu.png" 
              //  onClick={() => navigate('/marketplace')}
              />
            </div>
            </a>



            
          </div>
        </div>
        <div className="outer">
          <div className="main-message-box">
            <div className="overlap-group-2">
              <p className="body">Type a new message here</p> 
        
              < HiOutlineEmojiHappy  className="emojis flex justify-center items-center" color="#02040F"/>
              <AiOutlinePaperClip  className="outline-messages flex justify-center items-center" color="#02040F"/>
              
            </div>
            <TbSend2  className="send flex justify-center items-center" color="#02040F"/>
          
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="border-bottom" />
            <p className="p">Selamat siang, apakah ada sayur kol, kentang dan cabai kak?</p>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-2">
            <div className="border-bottom-2" />
            <p className="text-wrapper-2">Halo kak, perkenalkan saya safira dari Digital Food, ada kak silahkan.</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="image-2 " alt="Image" src="parto.png" />
        </div>
        <div className="frame-2">
          <img className="image-2 " alt="Image" src="parto.png" />
        </div>
        <div className="div-wrapper">
          <div className="overlap-3">
            <div className="border-bottom-3" />
            <div className="text-wrapper-3">Thank You :)</div>
          </div>
        </div>
        <div className="frame-3">
          <img className="image-3 flex justify-center items-center " alt="Image" src="kartun.png" />
        </div> 
        <TbAlertTriangleFilled className="bold-duotone-2 flex justify-center items-center" color="#FF3900"/>
        <RiDeleteBin5Fill  className="bold-duotone flex justify-center items-center" color="#082567"/>
        <a href="/MarketPlace">
        <IoChevronBack  className="back flex justify-center items-center" color="#02040F"/>
       </a>
        {/* <TiArrowForward  className="outline-messages-2 flex justify-center items-center" color="#02040F"/>
        <TiArrowForward  className="outline-messages-3 flex justify-center items-center" color="#02040F"/>
        <TiArrowForward  className="outline-messages-4 flex justify-center items-center" color="#02040F"/> */}
      </div>
    </div>
  );
};

export default ChatbotSidecol
