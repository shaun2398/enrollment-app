import React from 'react'

export default function SectionTitle(props) {
    const {name} = props
  return (
    <div class='container my-6'>
      <h3 class="title is-size-3-desktop is-size-6 my-6">{name}</h3>
    </div>
  )
}
