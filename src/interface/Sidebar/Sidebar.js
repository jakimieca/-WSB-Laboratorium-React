import React from "react";
import "./Sidebar.css";
import Logo from "../../images/logo.png";
import Dashboard from "../../images/dashboard.png";
import Layouts from "../../images/layouts.png";
import Settings from "../../images/settings.png";
import LogOut from "../../images/log-out.png";
import User from "../../images/user.png";
import Interface from "../../images/web-interface.png";
import Cards from "../../images/cards.png";
import Menu from "../../images/menu.png";


const Sidebar = () => {
  return (
  

    <div >
      <div for="menu" className="menu-bar">
      <a href="link address"><img src={Menu} className="img" /></a>
      </div>
      
<div className="sidebar">


      <div className="logo">
        <img src={Logo} />
        <span>
          AJ 
        </span>
      </div>

     

      <div className="menu">
        <div className="menuItem">
          <div>
          <a href="/Dashboard" className="nav_link"> <img src={Dashboard} className="img" /></a>
          </div>
          <span>
            <a href="/Dashboard" className="nav_link">Dashboard</a>
          </span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
          <a href="/Layouts" className="nav_link"> <img src={Layouts} className="img" /></a>
          </div>
          <span>
          <a href="/Layouts" className="nav_link">Layouts</a>
            </span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
          <a href="/User" className="nav_link"><img src={User} className="img" /></a>
          </div>
          <span> 
            <a href="/User" className="nav_link">User</a>
            </span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
          <a href="/Interface" className="nav_link"><img src={Interface} className="img" /></a>
          </div>
          <span>
            <a href="/Interface" className="nav_link">Interface</a>
            </span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
          <a href="/Cards" className="nav_link"><img src={Cards} className="img" /></a>
          </div>
          <span> 
            <a href="/Cards" className="nav_link">Cards</a>
            </span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
          <a href="/Settings" className="nav_link"><img src={Settings} className="img" /></a>
          </div>
          <span>
            <a href="/Settings" className="nav_link">Settings</a>
            </span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
          <a href="/LogOut" className="nav_link"><img src={LogOut} className="img" /></a>
          </div>
          <span><span>
            <a href="/LogOut" className="nav_link">Log out</a>
            </span></span>
        </div>
      </div>

      <div className="menu">
        <div className="switch"></div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
