import React from "react";

import Button from "./Button";

export default function Landing() {

  return (
    <div>
      <section class="columns is-desktop is-flex is-flex-direction-column is-justify-content-center has-text-centered-mobile">
        <div class="column is-half hero is-fullheight is-justify-content-center">
          <div>
            <h1 class="is-size-1-tablet has-text-weight-bold is-size-3">Lorem Ipsum Dolor</h1>
          </div>
          <div class="my-6">
            <h2 class="is-size-3-tablet is-size-5">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h2>
            <Button
              name="Sign Up Now"
              nextPage="/enrollment/mechanics"
              size="medium"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
