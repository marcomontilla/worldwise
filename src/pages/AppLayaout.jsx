import React from 'react'
import Sidebar from '../components/Sidebar'
import Map from '../components/Map'
import styles from './AppLayaout.module.css'

function AppLayaout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  )
}

export default AppLayaout