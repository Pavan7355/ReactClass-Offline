import React from "react";
import Component4 from "./Component4";

class Component3 extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrementCount=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <>
<h1>State And Props combination example</h1>
<Component4 count={this.state.count}
increment={this.incrementCount} decrement={this.decrementCount}/>
            </>
        )
    }
}

export default Component3