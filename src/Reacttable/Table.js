import React from "react";
import './table.css'
function Table(){
    const data=[
     {name:"viart",age:25,gender:"male"},
     {name:"sachin",age:45,gender:"male"},
     {name:"sundri",age:22,gender:"female"}

    ]
    return(
        <>
        <table border={"1"}>
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
</tr>
{data.map((val,key)=>{
    return(
<tr key={key}>
    <td>{val.name}</td>
    <td>{val.age}</td>
    <td>{val.gender}</td>
</tr>
    )
})}
        </table>
        </>
    )
}

export default Table;