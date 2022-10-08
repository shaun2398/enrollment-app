import React from 'react'

export default function AboutCard() {
  return (
    <div class="container is-widescreen notification is-link columns is-desktop mx-auto">
    <div class="column">
      <figure class="image is-50x50 has-text-centered">
        <img src="/about_page.jpg" />
      </figure>
    </div>
    <div class="column my-auto">
      <h4 class="is-size-4 title">About</h4>
      <p class="content has-text-justified">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>
  </div>
  )
}
