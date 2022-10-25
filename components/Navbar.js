import React, {useState} from 'react'

import Link from 'next/link'

export default function Navbar() {
    const [isActive, setisActive] = useState(false)
  return (
    <nav
      class="navbar is-primary is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Logo"
            width="112"
            height="28"
          />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          class={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <Link href="/">
              <a class="navbar-item">Home</a>
            </Link>
            <Link href="/info/about">
              <a class="navbar-item">About</a>
            </Link>
            <Link href="/info/services">
              <a class="navbar-item">Services</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}