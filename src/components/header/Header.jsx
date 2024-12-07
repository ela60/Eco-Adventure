// Header.jsx
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider"; // Ensure correct path

const Header = () => {
  const { user, logout } = useContext(AuthContext); // Use context to access user and logout
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout(); // Call logout from context
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow ${isMenuOpen ? "block" : "hidden"}`}>
            <li><NavLink to="/">Home</NavLink></li>
            {!user && (
              <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signUp">Sign Up</NavLink></li>
              </>
            )}
            {user && (
              <>
                <li><NavLink to="/profile">Update Profile</NavLink></li>
              </>
            )}
          </ul>
        </div>

        <NavLink to="/" className="btn btn-ghost text-[12px]  lg:text-xl">🌿 Eco-Adventures</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          {!user && (
            <>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/signUp">Sign Up</NavLink></li>
            </>
          )}
          {user && (
            <>
              <li><NavLink to="/profile">Update Profile</NavLink></li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <img src={user.profilePhoto || "/default-avatar.png"} alt="User Profile" className="w-8 h-8 rounded-full mr-2 border" />
            <button onClick={handleLogout} className="btn btn-error">Logout</button>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-primary">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
