import React from "react";
import Avatar from "../../assets/images/avatar.png";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <img alt="Tweetapp" src={Avatar} />
      <div>
        <h2>Yugen</h2>
      </div>
    </div>
  );
}

export default Profile;
