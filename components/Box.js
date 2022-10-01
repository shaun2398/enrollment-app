import React from 'react'

export default function Box(props) {
    const {answer, question} = props
  return (
    <div class="box has-text-left is-primary">
      <h4 class="is-size-4 title">{question}</h4>
      <h5 class="is-size-5 subtitle">{answer}</h5>
    </div>
  );
}
