import React from "react";

class Examplepros2 extends React.Component{
    render(){
        return(
            <>
            <img src={this.props.imageurl}
            height={this.props.height} width={this.props.width}/>
            <h1>{this.props.name}</h1>
            </>
        )
    }
}

export default Examplepros2