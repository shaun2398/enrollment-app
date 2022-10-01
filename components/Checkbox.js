import React from 'react'



export default function Checkbox(props) {
    const { toggleAgree, label } = props
  return (
    <label class="checkbox">
      <p class="has-text-justified has-text-centered py-5">
        <input type="checkbox" onClick={toggleAgree} />
        {label}
      </p>
    </label>
  );
}
