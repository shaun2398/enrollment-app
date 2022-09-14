import React from "react";

import Button from "./Button";

export default function Landing() {
  return (
    <section class="columns is-desktop is-flex is-flex-direction-column is-justify-content-center">
      <div class="column is-half hero is-fullheight is-justify-content-center">
        <div>
          <h1 class="is-size-1 has-text-weight-bold">Lorem Ipsum Dolor</h1>
        </div>
        <div class="my-6">
          <h2 class="is-size-3">
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
  );
}
