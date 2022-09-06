import React from 'react'

export default function LargeButton(props) {
    const {name} = props
  return (
    <button class="button is-primary is-rounded is-medium is-fullwidth my-6 is-uppercase">
        {name}
    </button>
  )
}

