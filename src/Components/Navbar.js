import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav_ctr">
        <header>
          <nav>
            <ul>
              <NavLink to="/">
                <li className="webname">Blog.Com</li>
              </NavLink>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/art">
                <li>Art</li>
              </NavLink>
              <NavLink to="/sports">
                <li>Sports</li>
              </NavLink>
              <NavLink to="/science">
                <li>Science</li>
              </NavLink>
              <NavLink to="/cinema">
                <li>Cinema</li>
              </NavLink>
            </ul>
          </nav>
          {/* <div className="logo">Logo</div> */}
          <div className="loginfield">
            <ul>
              <li>
                <NavLink to="/write">
                  <button className="btn">Write</button>
                </NavLink>
              </li>
              <NavLink to='/login'>

              <li>Login</li>
              </NavLink>
             
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
