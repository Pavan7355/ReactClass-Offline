import React from 'react'

class Example2 extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to React Js class",
            content:"hello goodmorning"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thank you for attending React Class",
            content:"Hello goodafternoon"
        })
    }
    render(){
        return(
            <>
            <h1>Example For changeing state object</h1>
            <h2>{this.state.message}</h2>
            <p>{this.state.content}</p>
            <button onClick={()=>this.changeMessage()}>Change State</button>
            </>
        )
    }
}

export default Example2;