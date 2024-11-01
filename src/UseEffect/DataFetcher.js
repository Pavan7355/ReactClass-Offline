import React from 'react'
import { useState,useEffect } from 'react'

function DataFetcher() {
const[data,setdata]=useState(null)

useEffect(()=>{
   let fetchData= async ()=>{
        try{
            let response=await fetch('https://fakestoreapi.com/products')
        let result=await response.json()
        setdata(result)
        }
        catch(error){
            console.log("Error Fetching data :",error)
        }

    }
    fetchData()
    // return ()=>{
    //     //clean up code 
    // }
},[])//empty dependency is not nessecary

  return (
    <div>
   {data?(<div>
    <h2>Data Fetched Successfully</h2>
    <pre>{JSON.stringify(data,null,2)}</pre>
    </div>):(<p>Loading......</p>)}
    </div>
  )
}

export default DataFetcher
