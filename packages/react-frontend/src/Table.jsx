import React from "react";

// table - used to represent tabular data
// thead - used to group header content in an HTML table
// tr - used to define a row in an HTML table
// th - used to define a header cell in a HTML table
// td - used to define a data cell in a table
// tbody - used to group the body content in an HTML table

function TableHeader(){
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}> Delete </button>
          </td>
        </tr>
      );
    });
    return (
        <tbody>
          {rows}
        </tbody>
     );
}


function Table(props) {
    return (
        <table>
            <TableHeader />
            <TableBody 
            characterData={props.characterData} 
            removeCharacter={props.removeCharacter}
            />
        </table>
    )
}



export default Table
