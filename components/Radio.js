import React from 'react'

export default function Radio(props) {
    const {label} = props
  return (
    <div class="field control my-5 has-text-left is-primary">
      <label class="label has-text-left is-uppercase">{label}</label>
      <label class="radio">
        <input type="radio" name="answer" />
        Male
      </label>
      <label class="radio">
        <input type="radio" name="answer" />
        Female
      </label>
    </div>
  );
}
