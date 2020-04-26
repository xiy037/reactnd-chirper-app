import React from "react";
import { NavLink } from "react-router-dom" ;

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/newTweet">NewTweet</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;