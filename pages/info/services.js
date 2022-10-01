import React from 'react'

import Card from '../../components/Card'

import styles from '../../styles/Services.module.css'

export default function services() {
  return (
    <div>
      <section>
        <div className={styles.services_hero}>
          <h1 class="is-size-1 has-text-centered has-text-weight-bold">Services</h1>
        </div>
        <div class="container is-fluid mb-5">
          <div class="columns is-desktop is-danger">
            <div class="column">
              <Card 
                img="/pharmacy.jpg" 
                alt="Pharmacy" 
                title="Pharmacy" />
            </div>
            <div class="column">
              <Card 
                img="/laboratory.jpg" 
                alt="Laboratory Services" 
                title="Laboratory" />
            </div>
            <div class="column">
              <Card 
                img="/consultation.jpg" 
                alt="online consulation" 
                title="Consultation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
