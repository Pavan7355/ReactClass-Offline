import React from 'react'
import { useState } from 'react';
import axios from 'axios'
function Rest() {
    const[data,setdata]=useState(null)
    const[error,setError]=useState(null)

    const handleSubmit=async () => {
        try {
          const response = await axios.get(
 "https://fakestoreapi.com/products/1"
          );
          setdata(response.data);
          setError(null);
        } catch (error) {
          setError('Failed to fetch weather data');
          setdata(null);
        }
      };
    console.log(data)
    console.log(error)
  return (
    <div>
      <button className='button' onClick={handleSubmit}>get Data</button>
   

    </div>
  )
}

export default Rest
