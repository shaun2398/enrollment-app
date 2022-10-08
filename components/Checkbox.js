import React from 'react'
import Link from 'next/link';



export default function Checkbox(props) {
    const { toggleAgree } = props
  return (
    <label class="checkbox">
      <blockquote class="content is-large has-text-justified my-6">
        <input type="checkbox" onClick={toggleAgree} />{" "}
        <Link href="/info/terms">
          <strong>
            <a class="has-text-black is-underlined">
              {" "}
              I agree to the terms and condition.
            </a>
          </strong>
        </Link>
        {"    "}Ed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. For more information, you may visit{" "}
        <Link href="/info/faqs">
          <strong>
            <a class="has-text-black is-underlined">
              Frequently Asked Questions.
            </a>
          </strong>
        </Link>
      </blockquote>
    </label>
  );
}
