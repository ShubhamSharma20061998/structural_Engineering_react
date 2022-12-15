import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navBar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className={styles.logo_img}
            src="https://api.freelogodesign.org/assets/thumb/logo/15046535_400.png?t=637885594730000000"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${styles.menubar}`}
          id="navbarNavAltMarkup"
        >
          <div className={`navbar-nav ${styles.menuItems}`}>
            <Link className="nav-link" aria-current="page" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/services">
              SERVICES
            </Link>
            <Link className="nav-link" to="/aboutus">
              ABOUT US
            </Link>
            <Link className="nav-link" to="/news">
              NEWS
            </Link>
            <Link className="nav-link" to="/contactus">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
