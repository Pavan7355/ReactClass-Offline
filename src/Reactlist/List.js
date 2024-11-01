import React from 'react'
import Form from 'react-bootstrap/Form';
export default function List() {
    const names=["dinga","dingi","sundra","sundri","subba","subbi"]
 var namelist=names.map((name,index)=>{
  return <li>{name}</li>
 })


    return (
    <div>
   <ol>
    {namelist}
   </ol>
   <TextControlsExample/>
    </div>
  )
}


function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

