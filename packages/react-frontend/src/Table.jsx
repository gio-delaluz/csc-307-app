import React from "react";

// table - represents tabular data
// thead - used to group header content in an HTML table
// tr - used to define a row in an HTML table
// th - defines aheader cell in a HTML table
// tbody - used to group the body content in an HTML table

function Table() {
    return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
    )
}

function TableHeader(){
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

function TableBody(){
    return (
        <tbody> 
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td> Mac </td>
                <td> Bouncer </td>
            </tr>
            <tr> 
                <td> Dee </td>
                <td> Aspiring Actress </td>
            </tr>
            <tr>
                <td> Dennis </td>
                <td> Bartender </td>
            </tr>
        </tbody>
    );
}

export default Table