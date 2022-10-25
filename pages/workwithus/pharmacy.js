import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import RequestForm from '../../components/RequestForm';

export default function pharmacy() {
  return (
    <section class="section is-medium notification">
      <div class="columns is-desktop box notification is-half container mx-auto">
        <div class="column content has-text-justified px-6">
          <h3 class="is-size-3 title is-underlined">e-Pharmacy</h3>
          <p>
            Quisque ante lacus, malesuada ac auctor vitae, congue non ante.
            Phasellus lacus ex, semper ac tortor nec, fringilla condimentum
            orci. Fusce eu rutrum tellus.
          </p>
          <p class="is-flex is-align-items-center">
            <span class="icon has-text-success is-large is-size-4">
              <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            </span>
            Donec blandit a lorem id convallis.
          </p>
          <p class="is-flex is-align-items-center">
            <span class="icon has-text-success is-large is-size-4">
              <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            </span>
            Cras gravida arcu at diam gravida gravida.
          </p>
          <p class="is-flex is-align-items-center">
            <span class="icon has-text-success is-large is-size-4">
              <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            </span>
            Integer in volutpat libero.
          </p>
        </div>
        <div class="column is-flex is-justify-content-start is-flex-direction-column mx-auto">
          <figure class="image is-fluid mb-4">
            <img src="/pharmacy.jpg" />
          </figure>
          <RequestForm nameOfService="e-Pharmacy" />
        </div>
      </div>
    </section>
  );
}