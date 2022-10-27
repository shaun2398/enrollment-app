//React
import React from "react"

// Components
import Landing from "../components/Landing";

//Styles
import styles from '../styles/Home.module.css'

// Animations
import { useSpring, animated } from "react-spring";

export default function Home() {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 2000,
    },
  });
  return (
    <animated.section className={styles.container} style={fadeIn}>
      <Landing />
    </animated.section>
  );
}
