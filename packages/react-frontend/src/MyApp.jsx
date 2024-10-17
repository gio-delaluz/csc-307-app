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

    // deleting an entry and connected to the backend
    function removeOneCharacter(index){
        const usertToDelete = characters[index];

        deleteUser(usertToDelete.id)
        .then((res) => {
            if (res.status === 204){
                const updated = characters.filter((_, i) => {
                    return i != index;
                });
                setCharacters(updated);
            } else if (res.status === 404){
                console.error("User not found!");
            } else {
                console.error("Failed to delete user");
            }
        }).catch((error) => {
            console.error("Error with deleting user:", error)
        });
    }

    function updateList(person) {
        postUser(person)
            .then((res) => {
                if (res.status !== 201) {
                    throw new Error("Object not created");
                }
                return res.json();
            })
            .then((newUser) => setCharacters([...characters, newUser]))
            .catch((error) => {
                console.log(error);
            });
    }
    
    function fetchUsers() {
        return fetch("http://localhost:8000/users")
          .then((res) => res.json())
          .then((json) => setCharacters(json["users_list"]))
          .catch((error) => console.error(error));
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

    function deleteUser(id) {
        return fetch(`http://localhost:8000/users/${id}`, { // utilizing template literals
            method: "DELETE",
        });
    }

    useEffect(() => {
        fetchUsers()
          .then((res) => res.json())
          .then((json) => setCharacters(json["users_list"]))
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
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