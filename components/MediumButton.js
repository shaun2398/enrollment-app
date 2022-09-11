import React from 'react'
import Link from 'next/link'

export default function MediumButton(props) {
    const {name, isUserAgree} = props
  return (
    <Link href="/enrollment/forms">
        <button
          class="button is-rounded is-primary my-5 is-fullwidth is-uppercase"
          title="Toggle Button"
          disabled={!isUserAgree}
        >
          {name}
        </button>
    </Link>
  );
}
