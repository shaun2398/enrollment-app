import React from 'react'

export default function MediumButton(props) {
    const {name, isUserAgree} = props
  return (
    <button class="button is-rounded is-primary my-5 is-fullwidth is-uppercase" title="Disabled button" disabled={!isUserAgree}>
      {name}
    </button>
  );
}
