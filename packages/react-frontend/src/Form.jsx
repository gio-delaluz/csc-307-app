import React, { useState } from "react"

function Form(){
    const [person, SetPerson] = useState({
        name: "",
        job: ""
    });

    return (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={person.name}
            onChange={handleChange}
          />
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            id="job"
            value={person.job}
            onChange={handleChange}
          />
        </form>
      );
}

function handleChange(event){
    /* 
    One event at a time (either editing/changing the name field or the job field),
    will be called every time one of the fields (name or job) changes its value.
    */
    const { name, value } = event.target;

    if (name === "job") // don't quite understand this one
        setPerson ({ name: person["name"], job: value });
    else setPerson ({ name: value, job: person["job"]});
}

export default Form