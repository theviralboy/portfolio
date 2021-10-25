import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";
// importing style
import "./style.css";
// importing data
import { NavData } from "./NavData";
import { SocialMediaData } from "./SocialMediaData";
// importing icons
import CloseBtn from "./CloseBtn";
import MenuBtn from "./MenuBtn";
const NavItem = ({ title, route }) => {
  return (
    <NavLink to={route} exact activeClassName="active" className="nav-link">
      {title}
    </NavLink>
  );
};

const SocialMediaItem = ({ title, iconClass, link }) => {
  return (
    <li>
      <a href={link} target="blank" rel="noreferrer">
        <i className={iconClass} title={title}></i>
      </a>
    </li>
  );
};

export const SocialMedia = () => {
  return (
    <ul className="social-media-inner">
      {SocialMediaData.map((item) => {
        return (
          <SocialMediaItem
            key={item.id}
            title={item.title}
            iconClass={item.iconClass}
            link={item.link}
          />
        );
      })}
    </ul>
  );
};

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [yValue, setYValue] = useState(0);
  window.onscroll = () => setYValue(window.scrollY);
  return (
    <header className={`header ${yValue > 90 ? "sticky" : ""}`}>
      <div className="header-wrapper max-width">
        <div className="header-left">
          <div className="logo">
            <Link to="/">
              <img
                src="https://sahilverma.ml/assets/images/logo.png"
                alt="Sahil Verma"
              />
            </Link>
          </div>
          <nav className="main-nav">
            <ul className="nav-list">
              {NavData.map((item) => {
                return (
                  <li className="nav-item" key={item.id}>
                    <NavItem title={item.title} route={item.route} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <div className="social-media">
            <SocialMedia />
          </div>
          <div className="menu-btn" onClick={(e) => setNavOpen(true)}>
            <MenuBtn />
          </div>
        </div>
      </div>
      <div
        className={`sidebar-bg ${navOpen ? "active" : ""}`}
        onClick={() => setNavOpen(false)}
      ></div>
      <div className={`sidebar ${navOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <div className="logo">
            <Link to="/">
              <img
                src="https://sahilverma.ml/assets/images/logo.png"
                alt="Sahil Verma"
              />
            </Link>
          </div>
          <div className="close-btn" onClick={() => setNavOpen(false)}>
            <CloseBtn />
          </div>
        </div>
        <div className="navbar-list">
          <ul className="nav-menu">
            {NavData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="nav-item"
                  onClick={() => setNavOpen(false)}
                >
                  <NavItem title={item.title} route={item.route} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-bottom">
          <div className="social-media">
            <SocialMedia />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
