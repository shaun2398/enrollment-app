//React
import React from "react"

// Components
import Landing from "../components/Landing";

//Styles
import styles from '../styles/Home.module.css'




export default function Home() {

  return (
    <section className={styles.container}>
      <Landing />
    </section>
  );
}
