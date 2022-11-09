import React from 'react'
import Link from 'next/link';

import MyImage from "../components/MyImage"

export default function Card(props) {
    const {image, alt, title, content, nextPage} = props

  return (
    <div class="card m-6">
      <div class="card-image">
        <figure class="image">
          <MyImage src={image} alt={alt} height="300" width="500" />
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
