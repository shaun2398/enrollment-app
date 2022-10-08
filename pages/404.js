import React from 'react'
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
  return (
    <section class="section is-medium has-text-centered">
      <span class="icon has-text-warning is-large is-size-1 my-6">
        <FontAwesomeIcon icon={faWarning}></FontAwesomeIcon>
      </span>
      <h2 class="title">This page is not available... yet.</h2>
      <h3 class="subtitle my-6">
        Click here to go back{" "}
        <Link href="/">
          <a>
            <strong class="is-underlined">Home</strong>
          </a>
        </Link>
      </h3>
    </section>
  );
}
