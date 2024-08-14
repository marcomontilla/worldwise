import React from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayaout.module.css";
import User from "../components/User";

function AppLayaout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayaout;
