import React from 'react'

export default function List1() {
    const persons=[
        {id:1,Name:"virat",Skills:"React"},
        {id:2,Name:"Sachin",Skills:"Angular"},
        {id:3,Name:"Raj",Skills:"Vue"}
    ]
   let personlist= persons.map((Person,index)=>{
        return<li>My id {Person.id} is my name is {Person.Name} i have 
        {Person.Skills} skill</li>
    })
  return (
    <div>
      <ul>
        {personlist}
      </ul>
    </div>
  )
}
