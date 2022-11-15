import React from "react";
import "./style.css";
import logo from "../../images/logo.svg"
import { NavLink } from "react-router-dom"


const index = () =>{
return (
  <>
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="link">
            <img src={logo} alt="" />
          </a>
          <ul className="navList">
            <li className="navItem">
              <NavLink
                to="/Beranda"
                className={({ isActive }) =>
                  isActive ? "bg-warning p-3 border rounded-pill unhovered  navLink" : "navLink"
                }
              >
                Beranda
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/Collection"    className={({ isActive }) =>
                  isActive ? "bg-warning p-3 border rounded-pill navLink" : "navLink"
                }>
                Koleksi
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/Syaratdan"    className={({ isActive }) =>
                  isActive ? "bg-warning p-3 border rounded-pill navLink" : "navLink"
                }>
                Syarat dan
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/Ketentuan"    className={({ isActive }) =>
                  isActive ? "bg-warning p-3 border rounded-pill navLink" : "navLink"
                }>
                Ketentuan
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/Kontak"    className={({ isActive }) =>
                  isActive ? "bg-warning p-3 border rounded-pill navLink" : "navLink"
                }>
                Kontak
              </NavLink>
            </li>
          </ul>
          <NavLink to="link" className="Masuk">
            Masuk
          </NavLink>
        </nav>
      </div>
    </header>
  </>
);
}
export default index;
