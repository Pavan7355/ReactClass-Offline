import React, { useEffect, useState } from 'react'

function DataFetcher2() {
const[data,setData]=useState(null)
const[error,setError]=useState(false)

useEffect(()=>{
    const fetchData=async ()=>{
        try{
            const response=await fetch('https://fakestoreapi.com/products')
            const res=await response.json()
            setData(res)
            setError(false)
        }
        catch(error){
            console.log("error while fetching Data :",error)
            setError(true)
        }
    }
    fetchData()  
},[])
  return (
    <div>
   <h2>Data Fetch Demo</h2>
   {error&&<p>Error fecthing data.Please try again later.</p>}
 {!error && data && (
    <ul>
        {data.map(post=>(
            <li key={post.id}>
                <h3>{post.title}</h3>
                <h4>{post.price}</h4>
                <p>{post.description}</p>
            </li>
        ))}
    </ul>
 )}
    </div>
  )
}
export default DataFetcher2