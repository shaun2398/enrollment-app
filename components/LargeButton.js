import React from 'react'
import Link from 'next/link'

export default function LargeButton(props) {
  const { name } = props;
  return (
    <Link href="/enrollment/mechanics">
      <button class="button is-primary is-rounded is-medium is-fullwidth my-6 is-uppercase">
        {name}
      </button>
    </Link>
  );
}

