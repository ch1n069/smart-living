import React from "react";
// import "./Home.css";
import styles from "./Home.module.css";
import Header from "../components/Header";
const HomeScreen = () => {
  return (
    <div className={styles.home}>
      <Header />
      {/* the text section */}
      <div>
        <h1>
          Enjoy your New Home <br />
          Smart Ecosytem
        </h1>
        <p>control all your homes smart devices from one place</p>
      </div>
    </div>
  );
};

export default HomeScreen;
