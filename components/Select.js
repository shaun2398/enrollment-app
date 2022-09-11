import React, { useEffect, useState } from 'react'

export default function Select({label, name}) {

    const [dropDownOption, setDropDownOption] = useState([])

    const genderOption = [
      {
        id: 1,
        name: "Male",
      },
      {
        id: 2,
        name: "Female",
      },
    ];

    useEffect(() => {
        const fetchOptionData = async () => {
          // region end point
          let region = `${name}`;
          let apiLink = `https://psgc.gitlab.io/api/${region}/`;
          const data = await fetch(apiLink);
          const res = await data.json();
          setDropDownOption(res);
        }
        fetchOptionData();
    }, [])

      const Options = label === 'gender' ? genderOption : dropDownOption
    
  return (
    <div class="my-3 is-flex is-flex-direction-column is-align-items-flex-start">
      <label class="label has-text-left is-uppercase">{label}</label>
      <div class="select is-large is-primary is-capitalized	">
        <select class="is-capitalized">
          <option>select {label}</option>
          {Options.map((option) => <option>{option.name}</option>)}
        </select>
      </div>
    </div>
  );
}
