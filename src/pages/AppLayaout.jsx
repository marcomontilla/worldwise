import React from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayaout.module.css";
import User from "../components/User";
import ProtectedRoute from "./ProtectedRoute";

function AppLayaout() {
  return (
    <ProtectedRoute>
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    </ProtectedRoute>
  );
}

export default AppLayaout;
