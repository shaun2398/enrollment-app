import React from 'react'

import { faFlaskVial, faMicroscope, faPills } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import RequestForm from '../../components/RequestForm';

export default function laboratory() {
  return (
    <section class="section is-medium notification">
      <div class="columns is-desktop box notification is-half container mx-auto">
        <div class="column content has-text-justified px-6">
          <h3 class="is-size-3 title is-underlined">Laboratory</h3>
          <p>
            Quisque ante lacus, malesuada ac auctor vitae, congue non ante.
            Phasellus lacus ex, semper ac tortor nec, fringilla condimentum
            orci. Fusce eu rutrum tellus.
          </p>
          <p class="is-flex is-align-items-center">
            <span class="icon has-text-success is-large is-size-4">
              <FontAwesomeIcon icon={faMicroscope}></FontAwesomeIcon>
            </span>
            Testing
          </p>
          <p class="is-flex is-align-items-center">
            <span class="icon has-text-success is-large is-size-4">
              <FontAwesomeIcon icon={faFlaskVial}></FontAwesomeIcon>
            </span>
            Chemistry
          </p>
          <p class="is-flex is-align-items-center">
            <span class="icon has-text-success is-large is-size-4">
              <FontAwesomeIcon icon={faPills}></FontAwesomeIcon>
            </span>
            Drugs
          </p>
          <p>
            Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec
            mattis vulputate risus in luctus. Maecenas vestibulum interdum
            commodo.
          </p>
        </div>
        <div class="column is-flex is-justify-content-start is-flex-direction-column mx-auto">
          <figure class="image is-fluid mb-4">
            <img src="/laboratory.jpg" />
          </figure>
          <RequestForm nameOfService="laboratory"/>
        </div>
      </div>
    </section>
  );
}
