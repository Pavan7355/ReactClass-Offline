import React from 'react'
import './card.css'
export default function Card({imageurl,name}) {
  return (
    <div>
      <div className='parentcard'>
<div className='childcard'>
    <img src={imageurl}
    height={200} width={200}/>
    <h2>{name}</h2>
    <p>Lorem Ipsum is simply dum PageMaker including versions of Lorem Ipsum</p>
<button className='btn'>Profile Details</button>
</div>
      </div>
    </div>
  )
}
