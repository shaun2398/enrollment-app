import React, {useState} from 'react'

import Link from 'next/link'

export default function Navbar() {
    const [isActive, setisActive] = useState(false)
  return (
    <nav
      className="navbar is-primary is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
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
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
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
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/info/about">
              <a className="navbar-item">About</a>
            </Link>
            <Link href="/info/services">
              <a className="navbar-item">Services</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}