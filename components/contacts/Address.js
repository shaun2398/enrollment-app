import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCity,
  faContactBook,
  faEnvelope,
  faMapPin,
  faPhone,
  faPills,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

export default function Address() {
  return (
    <div class="content is-flex is-flex-direction-column is-align-items-space-between is-justify-content-space-between">
      <div class="notification">
        <div>
          <h2 class="title m-5 is-uppercase has-text-centered is-size-3-desktop is-size-4">
            <span class="icon has-text-primary is-large is-size-3-desktop is-size-4">
              <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
            </span>
            headquarters
          </h2>
        </div>
        <p class="has-text-centered">Lorem Health Solutions, Inc.</p>
        <p class="has-text-centered">
          <a
            href="https://www.google.com/maps/place/2504+M.+Roxas,+Santa+Ana,+Manila,+Metro+Manila/data=!4m2!3m1!1s0x3397c9bddb2ffcfb:0xc18325f92680ef4a?sa=X&ved=2ahUKEwjinPfQoef6AhX7zHMBHXIGDI4Q8gF6BAgeEAE"
            target="_blank"
          >
            <p>2504 Manuel Roxas Street</p>{" "}
            <p> Santa Ana, Manila</p>
            <p>Metro Manila, Philippines</p>
          </a>
        </p>
      </div>
      <div class="notification">
        <div>
          <h2 class="title m-5 is-uppercase has-text-centered is-size-3-desktop is-size-4">
            <span class="icon has-text-primary is-large is-size-3-desktop">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            </span>
            {" "}contact information
          </h2>
        </div>
        <p class="has-text-centered">
          <a href="tel:(08562) - 00 - 0000">Tel. #. (08562) - 00 - 0000</a>
        </p>
        <br />
        <p class="has-text-centered">
          <a href="mailto:Sales@loremhealthsolutions.com">
            Sales@loremhealthsolutions.com
          </a>
        </p>
      </div>
    </div>
  );
}
