import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div class="container is-fluid columns">
        <div class="column content is-7">
          <a href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Logo"
              width="112"
              height="28"
            />
          </a>
          <br /><br />
          <p className="has-text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br/>
            Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <br />
          <p>
            <a href="/">© 2022, Lorem · Ipsum (Lorem Health Solutions, Inc.)</a>
          </p>
        </div>

        <div class="column content">
          <h4 className="is-uppercase has-text-white">work with us</h4>
          <br />
          <p>
            <a href="/">Lorem</a>
          </p>
          <br />
          <p>
            <a href="/">Ipsum</a>
          </p>
          <br />
          <p>
            <a href="/">Dolor</a>
          </p>
          <br />
        </div>

        <div class="column content">
          <h4 className="is-uppercase has-text-white">learn more</h4>
          <br />
          <p>
            <a href="/">Terms and Conditions</a>
          </p>
          <br />
          <p>
            <a href="/">Help Center</a>
          </p>
          <br />
          <p>
            <a href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}