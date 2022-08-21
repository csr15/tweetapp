import React, { useState } from "react";
import Avatar from "../../assets/images/avatar.png";

import "./Tweet.css";

function Tweet() {
  const [expand, setExpand] = useState(false);
  const [expandReply, setExpandReply] = useState(false);

  return (
    <div className="tweet">
      <div className="avatar">
        <img alt="TweetApp" src={Avatar} />
      </div>
      <div className="content">
        <div className="name">
          <h6>Name</h6>
          <span className="space"></span>
          <p>3h Ago</p>
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            minima.
          </p>
        </div>
        <div className="reactions">
          <div>
            <i class="bx bx-heart"></i>
          </div>
          <div>
            <i
              class="bx bx-heart"
              onClick={() => {
                setExpandReply(false);
                setExpand(!expand);
              }}
            ></i>{" "}
          </div>
          <div>
            <i
              class="bx bx-heart"
              onClick={() => {
                setExpandReply(!expandReply);
                setExpand(false);
              }}
            ></i>
          </div>
        </div>
        {expand && (
          <div className="expand">
            <input type="text" />
          </div>
        )}
        {expandReply && (
          <div className="expand-reply">
            <div className="name">
              <h6>Name</h6>
              <span className="space"></span>
              <p>3h Ago</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              sequi?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tweet;
