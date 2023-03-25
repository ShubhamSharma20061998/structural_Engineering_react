import React from "react";
import { Link } from "react-router-dom";
import styles from "./Project_menu.module.css";

const Project_menu = () => {
  return (
    <div className={styles.project_menu}>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/commercial" className={styles.nav_Link}>
            COMMERCIAL
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/hospitality" className={styles.nav_Link}>
            HOSPITALITY
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/industrial" className={styles.nav_Link}>
            INDUSTRIAL
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/residential" className={styles.nav_Link}>
            RESIDENTIAL
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/institutional" className={styles.nav_Link}>
            INSTITUTIONAL
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Project_menu;
