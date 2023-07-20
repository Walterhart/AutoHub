import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineAccountCircle, MdOutlineLogout } from "react-icons/md";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedin") === "true"
  );

  function signOut() {
    localStorage.removeItem("loggedin");
    setIsLoggedIn(false);
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        AutoHub
      </Link>

      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/cars"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Cars
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>

        {isLoggedIn ? (
          <button onClick={signOut} className="transparent-button">
            <MdOutlineLogout className="sign-out-icon" />
          </button>
        ) : (
          <Link to="/login">
            <MdOutlineAccountCircle />
          </Link>
        )}
      </nav>
    </header>
  );
}
