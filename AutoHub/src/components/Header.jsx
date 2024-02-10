import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineAccountCircle, MdOutlineLogout } from "react-icons/md";

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString);

    if (userData && userData.user && userData.user.uid) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  function signOut() {
    localStorage.removeItem("user");
    setIsLogged(false);
    navigate(location.pathname);
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

        {isLogged ? (
          <>
            <NavLink
              to="/host"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Host
            </NavLink>
            <button onClick={signOut} className="transparent-button">
              <MdOutlineLogout className="sign-out-icon" />
            </button>
          </>
        ) : (
          <Link to="/login">
            <MdOutlineAccountCircle />
          </Link>
        )}
      </nav>
    </header>
  );
}
