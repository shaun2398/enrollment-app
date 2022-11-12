import React from 'react'

import AboutCard from '../../components/info/AboutCard';
import MissionCard from '../../components/info/MissionCard';
import VisionCard from '../../components/info/VisionCard';
import SectionTitle from '../../components/SectionTitle'


import styles from '../../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_hero}>
        <figure class="image has-text-centered mt-5">
          <img src="https://bulma.io/images/bulma-logo.png" />
        </figure>
        <span>
          <SectionTitle name="Lorem Health Solutions" />
        </span>
      </div>
      <section class="section is-medium">
        <AboutCard />
        <MissionCard />
        <VisionCard />
      </section>
    </div>
  );
}
