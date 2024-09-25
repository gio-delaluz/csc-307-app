// Good practice to keep grounds of related components in seperate files
import React from "react";
import Table from "./Table";

// returns what is rendered on the screen
function MyApp(){
    // MUST return an element to be rendered on the page
    return(
        <div className = "container">
            <Table />
        </div>
        

    )
}

export default MyApp