import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

export default function Collapsible(props) {
    const {title, content} = props
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

  return (
    <div class="box has-text-left is-hovered" onClick={handleClick} style={{cursor: "pointer"}}>
      <div>
        <h4 class="subtitle is-size-4 is-flex is-justify-content-space-between has-text-weight-semibold">
          {title}
          <span class="icon has-text-success is-small is-size-5">
            <FontAwesomeIcon
              icon={toggle ? faArrowCircleUp : faArrowCircleDown}
            ></FontAwesomeIcon>
          </span>
        </h4>
      </div>
      <div>
        <p
          class={`content ${toggle ? "" : "is-hidden"} notification is-success mt-2`}
        >
          Answer: {content}
        </p>
      </div>
    </div>
  );
}
