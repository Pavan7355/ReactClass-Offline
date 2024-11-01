import React from "react";

class Example1 extends React.Component{
    constructor(){
        super()
        this.state={
            message:"welcome to React js class",
            city:"Bangalore",
            area:{
                street:"1st main",
                location:"Vijayanagar"
            }
        }
    }
    render(){
        return(
            <>
            <h1>this is example for state</h1>
            <h2>{this.state.message}</h2>
            <p>{this.state.city}</p>
            <p>{this.state.area.location}</p>
            </>
        )
    }
}
export default Example1