import React from 'react'

export default function SectionTitle(props) {
    const {name} = props
  return (
    <div class='container my-6'>
      <h1 className="title is-size-1 my-6">{name}</h1>
    </div>
  )
}
