import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCity, faMapPin, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Address() {
  return (
    <div>
      <div class="notification container content has-text-centered">
        <h3 class="title is-size-3-tablet has-text-centered">
          {/* <span class="icon has-text-success is-large is-size-3-tablet">
            <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
          </span> */}
          {" "}HEADQUARTERS
        </h3>
        <p>Lorem Health Inc.</p>
        <p>767 Drury lane Street</p>
        <p>Sampaloc, Manila</p>
        <h3 class="title is-size-3-tablet has-text-centered">
        {/* <span class="icon has-text-success is-large is-size-3-tablet">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          </span> */}
          {" "}CONTACT</h3>
        <p>email: loremhealthsolutions@sales.com</p>
        <p>Tel: 8560-44-22</p>
        <p>Phone: +639-123-456-789</p>
      </div>
    </div>
  );
}
