import React from 'react'
import Link from 'next/link'

export default function Button(props) {
  const { hasToggle, name, nextPage, size, type, onSubmit } = props;

  const buttonColor = name == 'back' ? 'danger' : 'primary'
  const buttonType = type == 'submit' ? 'submit' : 'button'
  
  return (
    <Link href={`${nextPage}`}>
        <button
          class={`button is-${size} is-${buttonColor} my-5 is-fullwidth is-uppercase`}
          title={name}
          type={buttonType}
          disabled={hasToggle}
          onClick={onSubmit}
        >
          {name}
        </button>
    </Link>
  );
}
