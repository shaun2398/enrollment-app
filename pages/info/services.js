import React from 'react'

import Card from '../../components/Card'
import SectionTitle from '../../components/SectionTitle'

import styles from '../../styles/Services.module.css'
import { servicesData } from './service/serviceData';

export default function services() {
  return (
    <div>
      <div className={styles.services_hero}>
        <SectionTitle name="Services" />
      </div>
      <div class="container is-widescreen">
        <div class="content is-medium has-text-justified my-6">
          <h4 class="title is-size-4 has-text-centered">What We Offer</h4>
          <p class="mx-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
        </div>
      </div>
      <div class="columns is-desktop container is-fluid">
        {servicesData.map((card) => (
          <div class="column is-fluid mx-auto">
              <Card
                title={card.title}
                image={card.image}
                alt={card.alt}
                content={card.content}
                nextPage={card.nextPage}
              />
          </div>
        ))}
      </div>
    </div>
  );
}
