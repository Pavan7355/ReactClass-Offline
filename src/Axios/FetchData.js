import React, { useState } from 'react'
import axios from 'axios'
function FetchData() {
const[data,setData]=useState(null)
const[error,setError]=useState(null)

const handlesubmit=async ()=>{
    try{
       const response=await axios.get("https://fakestoreapi.com/products/1")
        setData(response.data)
        setError(null)
    }
    catch(error){
        setError("Data failed to fetch")
        setData(null)
    }
}
console.log(data)
console.log(error)
  return (
    <div>
      <button onClick={handlesubmit}>Get data</button>
    </div>
  )
}

export default FetchData
