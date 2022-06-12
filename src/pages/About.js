import React, { Component } from 'react';
import "./About.css";
import profile_image from "/Users/felicexie/Desktop/Georgia Tech Documents/Junior Year/Summer 2022/IBM/to-do-list_week1-fxie48/src/assets/IMG_9201.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className='centered'>
            <img
              src={profile_image}
              className='profile_image'
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
          <div className="name_title">Felice Xie</div>
          <div className="brief_description">I am an incoming 4th year Computer Science major at Georgia Tech.
          I actually just changed my major from Industrial Engineering to Computer Science so I'm very
          excited to see what this path entails. </div>
            </div>
        </div>
      </div>
    )
  }
}