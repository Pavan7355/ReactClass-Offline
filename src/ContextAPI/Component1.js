import React, { createContext, useState } from 'react'
import Component2 from './Component2'
  export const contextData=createContext()
function Component1() {
    const[data,setData]=
    useState("this is the data to be passed to component 4 ")
     const[image,setImage]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_OP9TZ0iDuVeo4LKhdSaeR8k1GBkGCzu0g&s')
    return (
    <div>
      <h1>Component1</h1>
      <p>{data}</p>
      <contextData.Provider value={[data,image]}>
      <Component2/>
      </contextData.Provider>

    </div>
  )
}

export default Component1
