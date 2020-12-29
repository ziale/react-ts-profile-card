import React, { Component } from "react";
import "./Profile.css";

const profile = props => {
  const profileInfoData = props.person.data.map(next => {
    return (
      <div className="profile-info-data">
        <div className="profile-info-data__number">{next.value}</div>
        <div className="profile-info-data__name">{next.display}</div>
      </div>
    );
  });

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
          <div className="profile-info">{profileInfoData}</div>
        </div>
      </div>
    </div>
  );
};

export default profile;
