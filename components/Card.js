import React from 'react'
import Link from 'next/link';

export default function Card(props) {
    const {image, alt, title, content, nextPage} = props

  return (
    <div class="card m-6">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={image} alt={alt} />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4 class="is-uppercase">{title}</h4>
          <p>{content}</p>
          <Link href={`${nextPage}`}>
            <button class="button is-info card-footer-item">LEARN MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
