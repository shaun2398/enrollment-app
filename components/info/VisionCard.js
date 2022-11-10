import React from 'react'
import MyImage from '../MyImage'

export default function VisionCard() {
  return (
    <div class="container is-widescreen notification is-link columns is-desktop mx-auto my-6">
      <div class="column">
        <figure class="image is-50x50 has-text-centered">
          <MyImage src="/vision_about_page.jpg" alt="vision picture" height="300" width="500" />
        </figure>
      </div>
      <div class="column my-auto">
        <h4 class="is-size-4 title">Vision</h4>
        <p class="content has-text-justified">
          We are the nation’s most trusted, caring, and
          internationally-recognized healthcare institution – with top-notch
          service, expertise, and technology.
        </p>
      </div>
    </div>
  );
}
