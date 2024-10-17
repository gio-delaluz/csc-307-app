// Good practice to keep grounds of related components in seperate files
import React, { useState, useEffect } from "react";
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

    function fetchUsers(){
        // fetch returns the promise
        const promise = fetch("http://localhost:8000/users");
        return promise
    }

    function postUser(person) {
        const promise = fetch("http://localhost:8000/users", {
          method: "POST", // indicates that we want to perform a POST rather than a GET
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(person) // converts the JSON into a string format
        });
      
        return promise;
      }

    useEffect(() => {
        fetchUsers()
          .then((res) => res.json())
          .then((json) => setCharacters(json["users_list"]))
          .catch((error) => {
            console.log(error);
          });
      }, []);

    function updateList(person) {
        postUser(person) // 
        .then(() => setCharacters([...characters, person]))
        .catch((error) => {
            console.log(error);
        });
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