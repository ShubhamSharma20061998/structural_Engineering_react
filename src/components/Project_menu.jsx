import React from "react";
import styles from "./Project_menu.module.css";

const Project_menu = () => {
  return (
    <div className={styles.project_menu}>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/commercial">
            COMMERCIAL
          </a> */}
          <Link to='/commercial'>COMMERCIAL</Link>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hospitality">
            HOSPITALITY
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/industrial">
            INDUSTRIAL
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/residential">
            RESIDENTIAL
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="institutional">
            INSTITUTIONAL
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Project_menu;
