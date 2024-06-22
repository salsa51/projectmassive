import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TbAlertTriangleFilled } from "react-icons/tb";

import { CiSearch } from "react-icons/ci";
import { TbSquareRoundedChevronDownFilled } from "react-icons/tb";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { TbSend2 } from "react-icons/tb";
import "../styles/chatbot.css";

export const Chatbot = () => {
  return (
    <div className="chatbot">
      <div className="div">
        <div className="sidebar">
          <div className="frame">
            <div className="frame-2">
              <BiSolidMessageSquareAdd className="bold-duotone-3" alt="Bold duotone" />
              <div className="text-wrapper">New Chat</div>
            </div>
            <div className="frame-3">
              <TbSquareRoundedChevronDownFilled className="bold-duotone-arrows" alt="Bold duotone arrows" />
              <div className="text-wrapper-2">Recent Chats</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-3">Rephrase text...</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-4">Fix this code ne...</div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-3">Sample Copy for...</div>
            </div>
            <div className="frame-6">
              <div className="image-wrapper">
                <img className="image" alt="Image" src="parto.png" />
              </div>
              <div className="frame-7">
                <div className="text-wrapper-5">Welcome back,</div>
                <div className="text-wrapper-6">Parto</div>
              </div>
              <IoIosArrowUp className="arrow-down" alt="Arrow down" />
            </div>
            
            <div className="outline-essentional-wrapper">
              <img className="outline-essentional" alt="Outline essentional" src="menu.png" />
            </div>
            
          </div>
        </div>
        <div className="outer">
          <div className="main-message-box">
            <div className="overlap-group">
              <p className="body">Type a new message here</p>
              < HiOutlineEmojiHappy  className="emojis flex justify-center items-center" color="#02040F"/>
              <AiOutlinePaperClip  className="outline-messages flex justify-center items-center" color="#02040F"/>
              <TbSend2  className="send flex justify-center items-center" color="#02040F"/>
            </div>
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
            <p className="text-wrapper-7">Halo kak, perkenalkan saya safira dari Digital Food, ada kak silahkan.</p>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="img" alt="Image" src="parto.png" />
        </div>
        <div className="main-message-box-2">
          <div className="overlap-3">
            <div className="border-bottom-3" />
            <div className="text-wrapper-8">Thank You :)</div>
          </div>
        </div>
        <div className="frame-8">
          <img className="img" alt="Image" src="parto.png" />
        </div>
        <div className="frame-9">
          <img className="image-2" alt="Image" src="kartun.png" />
        </div>
        
        
        <a href="/ChatbotSidecol">
        <IoChevronBack  className="back flex justify-center items-center" color="#02040F"/>
        </a>
        <TbAlertTriangleFilled className="bold-duotone-2 flex " color="#FF3900"/>
        <RiDeleteBin5Fill  className="bold-duotone flex justify-center items-center" color="#082567"/>
        <div className="search">
          <div className="overlap-4">
            <div className="text-wrapper-9">Search</div>
            <CiSearch className="img" color="#7E7E7E"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Chatbot