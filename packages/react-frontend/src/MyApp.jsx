// Good practice to keep grounds of related components in seperate files
import React from "react";
import Table from "./Table";

// Our MyApp is at the top of the hierarchy, must pass the data down to the children
// this is achieved with properties/props and with state

const characters = [
    {
      name: "Charlie",
      job: "Janitor"
    },
    {
      name: "Mac",
      job: "Bouncer"
    },
    {
      name: "Dee",
      job: "Aspring actress"
    },
    {
      name: "Dennis",
      job: "Bartender"
    }
  ];

// returns what is rendered on the screen
function MyApp(){
    // MUST return an element to be rendered on the page
    return(
        <div className = "container">
            <Table characterData={characters} />
        </div>
        

    )
}

export default MyApp