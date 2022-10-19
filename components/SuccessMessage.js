import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function SuccessMessage({ message }) {
  return (
    <div class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between">
      <span class="icon has-text-success is-large is-size-1 my-3">
        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
      </span>
      <p class="content has-text-centered my-5 is-large">{message}</p>
    </div>
  );
}
