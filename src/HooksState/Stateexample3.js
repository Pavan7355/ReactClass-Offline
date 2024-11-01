import React from 'react'
import { useState } from 'react'
function Stateexample3() {
  const[imageUrl,setImageUrl]=useState('https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png')
    let changetoAngular=()=>{
           setImageUrl("https://www.liblogo.com/img-logo/an271a55f-angular-logo-angular-logo-transparent-png-stickpng.png")
    }
    let changetoReact=()=>{
  setImageUrl('https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png')
    }
  return (
    <div style={{width:"800px",margin:"50px auto",textAlign:"center"}}>
      <div>
        <img src={imageUrl} width={300} height={300}></img>
      </div>
      <div>
        <button onClick={changetoReact}>React</button>
        &nbsp;    &nbsp;    &nbsp;    &nbsp;    &nbsp;
        &nbsp;    &nbsp;    &nbsp;    &nbsp;    &nbsp;
        &nbsp;    &nbsp;    &nbsp;    &nbsp;    &nbsp;
        &nbsp;    &nbsp;    &nbsp;    &nbsp;    &nbsp;
        <button onClick={changetoAngular}>Angular</button>
      </div>
    </div>
  )
}

export default Stateexample3
