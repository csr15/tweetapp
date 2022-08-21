import React, { useEffect, useState } from "react";

import "./Navigation.css";

const Navigation = React.memo(() => {
  const [allGenres, setAllGenres] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="f_nav_container">
      <nav className="navbar navbar-expand-lg">
        <a href="/">
          <div className="navbar-brand">
            <span className="my-auto">Tweet App</span>
          </div>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" onClick={() => null}>
              <p>All Tweets</p>
            </li>
            <li className="nav-item" onClick={() => null}>
              <p>My Tweets</p>
            </li>
            <li className="nav-item" onClick={() => null}>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
});

export default Navigation;
