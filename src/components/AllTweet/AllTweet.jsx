import React from "react";
import { Link } from "react-router-dom";

function AllTweet() {
  return (
    <div className="all-tweet">
      <Link to="/myTweet">My Tweet</Link>
    </div>
  );
}

export default AllTweet;
