import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


import SectionTitle from '../../components/SectionTitle';

export default function success() {
  return (
    <div class="notification has-text-centered">
      <span class="icon has-text-success is-large is-size-1">
        <FontAwesomeIcon
          icon={faCheckCircle}
        ></FontAwesomeIcon>
      </span>
      <SectionTitle name="Thank You!" />
      <div class="container">
        <div class="content is-large has-text-centered has-text-justified">
          <p class="is-size-3-desktop is-size-4">
            Your details have been successfully recorded. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
