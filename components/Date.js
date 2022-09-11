import React from 'react'

export default function Date(props) {
    const {name} = props
  return (
    <div class="field my-5">
      <div class="control is-large">
        <label class="label has-text-left is-uppercase">{name}</label>
        <input
          class="input is-large is-primary"
          type="date"
          placeholder={name}
        ></input>
      </div>
    </div>
  );
}
