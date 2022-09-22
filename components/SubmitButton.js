import React from 'react'

export default function SubmitButton(props) {
  const { hasToggle, name, size } = props;

  const buttonColor = name == 'back' ? 'danger' : 'primary'


  return (
      <button
        class={`button is-${size} is-${buttonColor} my-6 is-fullwidth is-uppercase`}
        title={name}
        type='submit'
        disabled={hasToggle}
      >
        {name}
      </button>
  );
}
