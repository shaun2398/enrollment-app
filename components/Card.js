import React from 'react'

export default function Card(props) {
    const {img, alt, title, } = props

  return (
    <div class="card m-6">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src={img}
            alt={alt}
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
            <h4 class="has-text-centered is-uppercase">{title}</h4>
        </div>
      </div>
    </div>
  );
}
