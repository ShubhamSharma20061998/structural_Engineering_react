import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navBar}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            className={styles.logo_img}
            src="https://api.freelogodesign.org/assets/thumb/logo/15046535_400.png?t=637885594730000000"
            alt="logo"
          />
        </a>
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
            <a className="nav-link" aria-current="page" href="#">
              HOME
            </a>
            <a className="nav-link" href="#">
              SERVICES
            </a>
            <a className="nav-link" href="#">
              ABOUT US
            </a>
            <a className="nav-link" href="#">
              NEWS
            </a>
            <a className="nav-link" href="#">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
