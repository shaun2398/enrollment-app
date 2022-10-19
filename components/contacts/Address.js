import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCity,
  faClipboard,
  faContactBook,
  faEnvelope,
  faPhone,
  faPills,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

export default function Address() {
  return (
    <div class="content is-flex is-flex-direction-column is-align-items-space-between is-justify-content-space-between">
      <div class="notification">
        <div class="is-flex is-align-items-center">
          <span class="icon has-text-primary is-large is-size-3">
            <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
          </span>
          <h2 class="title m-5 is-uppercase has-text-right">headquarters</h2>
        </div>
        <p>
          <span class="icon has-text-primary is-large is-size-4">
            <FontAwesomeIcon icon={faPills}></FontAwesomeIcon>
          </span>
          Lorem Health Solutions, Inc.
        </p>
        <address>
          <a
            href="https://www.google.com/maps/place/2504+M.+Roxas,+Santa+Ana,+Manila,+Metro+Manila/data=!4m2!3m1!1s0x3397c9bddb2ffcfb:0xc18325f92680ef4a?sa=X&ved=2ahUKEwjinPfQoef6AhX7zHMBHXIGDI4Q8gF6BAgeEAE"
            target="_blank"
          >
            <p>
              <span class="icon has-text-primary is-large is-size-4">
                <FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon>
              </span>
              2504 Manuel Roxas Street Santa Ana, Manila, Philippines
            </p>
          </a>
        </address>
      </div>
      <div class="notification">
        <div class="is-flex is-align-items-center">
          <span class="icon has-text-primary is-large is-size-3">
            <FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon>
          </span>
          <h2 class="title m-5 is-uppercase has-text-left">
            contact information
          </h2>
        </div>
        <span class="icon has-text-primary is-large is-size-4">
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
        </span>
        <a href="tel:(08562) - 00 - 0000">Tel. #. (08562) - 00 - 0000</a>
        <br />
        <span class="icon has-text-primary is-large is-size-4">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </span>
        <a href="mailto:Sales@loremhealthsolutions.com">
          Sales@loremhealthsolutions.com
        </a>
      </div>
    </div>
  );
}
