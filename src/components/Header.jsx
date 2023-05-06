import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <h2>LOGO WOLL GO here</h2>
      </div>

      <div className={styles.nav}>
        <div className={styles.menu_container}>
          <p>Products </p>
          <p>Technology</p>
          <p>Benefits</p>
          <p>Blogs</p>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
