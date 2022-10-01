import React from 'react'

export default function SectionTitle(props) {
    const {name} = props
  return (
    <div class='container my-6'>
      <h3 className="title is-size-3 my-6">{name}</h3>
    </div>
  )
}
