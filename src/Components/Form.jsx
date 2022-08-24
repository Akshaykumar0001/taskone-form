import React from "react";
import "./Form.css";
import SociaIcons from "./SociaIcons";
import InputBox from "../input/InputBox";

function Form() {
  return (
    <div className="container flex-row">
      <div className="image-container">
        <div className="introductory-container">
          <h1>Welcome to signup form</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      <div className="form-container">
        <form className="form-wrapper">
          <legend>Sign up with this services</legend>
          <SociaIcons />
          <div className="horizontal-line">
            <span className="or-text middle">or</span>
          </div>
          <div className="flex-row-input">
            <InputBox
              label="Full Name"
              id="fullname"
              type="text"
              width="flex-48"
            />
            <InputBox
              label="Username"
              id="username"
              type="text"
              width="flex-48"
            />
          </div>
          <InputBox
            label="Email-Address"
            id="email"
            type="email"
            width="w-100"
          />
          <InputBox
            label="Password"
            id="password"
            type="password"
            width="w-100"
          />
          <div className="user-consent">
            <input type="checkbox" id="user-consent" />
            <label for="user-consent">
              I Agree All Statements In Terms of Service
            </label>
          </div>
          <button className="btn">Create an account</button>
          <div className="info-container">
            <p>
              I am already a member! <span className="active-link">Sign In</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;