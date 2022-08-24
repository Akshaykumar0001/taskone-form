import React from "react";
import "./Form.css";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function SociaIcons() {
  return (
    <div className="icons-container">
      <div className="icon-circle">
        <AiOutlineGoogle />
      </div>
      <div className="icon-circle">
        <FaFacebookF />
      </div>
      <div className="icon-circle">
        <AiOutlineTwitter />
      </div>
    </div>
  );
}

export default SociaIcons;