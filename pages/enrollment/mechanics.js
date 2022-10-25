import React, { useState } from 'react'

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import SectionTitle from '../../components/SectionTitle';

export default function mechanics() {

  const [isUserAgree, setIsUserAgree] = useState("")

  const toggleAgree = () => {
    setIsUserAgree(!isUserAgree)
  }


  return (
    <section class="section">
      <div class="container notification">
        <div class="content is-large has-text-centered">
          <SectionTitle name="Let's Get Started" />
          <p class="content has-text-centered has-text-justified my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
          <p class="content has-text-centered has-text-justified my-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur
          </p>
          <div class="container">
            <Checkbox toggleAgree={toggleAgree} />
          </div>
          <div class="container">
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
