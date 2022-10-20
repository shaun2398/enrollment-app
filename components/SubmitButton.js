import React from 'react'

export default function SubmitButton(props) {
  const { hasToggle, name, size } = props;

  const buttonColor = name == 'back' ? 'danger' : 'primary'


  return (
      <button
        class={`button is-${size} is-${buttonColor} is-fullwidth is-uppercase my-6`}
        title={name}
        type='submit'
        disabled={hasToggle}
      >
        {name}
      </button>
  );
}
