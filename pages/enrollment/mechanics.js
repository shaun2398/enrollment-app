import React, { useState } from 'react'

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

export default function mechanics() {

  const [isUserAgree, setIsUserAgree] = useState("")

  const label = " I agree to the terms and condition. Ed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat  voluptatem."

  const toggleAgree = () => {
    setIsUserAgree(!isUserAgree)
  }


  return (
    <section className="section is-medium">
      <div className="container">
        <div className="notification has-text-centered py-6">
          <h1 className="title is-size-1 my-5">Let's Get Started</h1>
          <p className="has-text-centered has-text-justified my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
          <div className="container">
            <Checkbox toggleAgree={toggleAgree} label={label} />
          </div>
          <div className="container">
            <Button
              name="next"
              nextPage="/enrollment/forms"
              size="medium"
              hasToggle={!isUserAgree}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
