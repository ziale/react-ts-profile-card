import React, { Component } from "react";
import "./Profile.css";

const profile = props => {
  return (
    <div className="page">
      <div className="profile">
        <div className="profile-background" />
        <div className="profile-contents">
          <div className="profile-header">
            <svg
              className="profile-header__icon"
              width="10rem"
              height="10rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>

            <h1 className="profile-header__text">{props.person.name}</h1>
          </div>
          <div className="profile-info">
            <div className="profile-info-data">
              <div className="profile-info-data__number">
                {props.person.data[0].value}
              </div>
              <div className="profile-info-data__name">
                {props.person.data[0].display}
              </div>
            </div>
            <div className="profile-info-data">
              <div className="profile-info-data__number">
                {props.person.data[1].value}
              </div>
              <div className="profile-info-data__name">
                {props.person.data[1].display}
              </div>
            </div>
            <div className="profile-info-data">
              <div className="profile-info-data__number">
                {props.person.data[2].value}
              </div>
              <div className="profile-info-data__name">
                {props.person.data[2].display}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
