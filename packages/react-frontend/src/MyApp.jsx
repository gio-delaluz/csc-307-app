// Good practice to keep grounds of related components in seperate files
import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

// Our MyApp is at the top of the hierarchy, must pass the data down to the children
// this is achieved with properties/props and with state


// returns what is rendered on the screen
function MyApp(){
    // useState() -- a react hook to create a piece of state named characters, which holds an array of objects
    // setCharacters -- which can be used to update the characters array later
    const [characters, setCharacters] = useState([]);

    // filtering the array
    function removeOneCharacter(index){
        const updated = characters.filter((character, i) => {
            return i != index;
        });
        setCharacters(updated);
    }

    function updateList(person){
        setCharacters([...characters, person])
    }
    
    return (
        <div className="container">
          <Table 
            characterData={characters} 
            removeCharacter={removeOneCharacter}
        />
        <Form handleSubmit={updateList} />
        </div>
      );
}

export default MyApp