import React from 'react'
import Link from 'next/link'

export default function Button(props) {
  const { hasToggle, name, nextPage, size } = props;
  return (
    <Link href={`${nextPage}`}>
      <button
        class={`button is-rounded is-${size} is-primary my-5 is-fullwidth is-uppercase`}
        title={name}
        type="button"
        disabled={hasToggle}
      >
        {name}
      </button>
    </Link>
  );
}
