import React from 'react'
import Component2 from './Component2'

class Component1 extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Pentagonspace"
        }
    }
    render(){
        return(
            <>
            <h1>this class component</h1>
            <p>{this.state.name}</p>
            <Component2 content={this.state.name}/>
            </>
        )
    }
}

export default Component1