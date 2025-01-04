import React from "react";
import Counter from "../counter/counter";

import Buttonb from "../button/button";
class Home extends React.Component{
    constructor(props){
        super(props);
        this .state={
            message:"welcome to my react app",
            count:0,
        }
    }

increment=()=>{
    this.setState({
        count:this.state.count+1
    })
    


}
decrement=()=>{
    this.setState({
        count:this.state.count-1
    })
}


render(){
return(
    <>
    <h1>{this.state.message}</h1>
    <Counter count ={this.state.count+1 }/>
    <Buttonb onClick={this.increment} onClick2={this.decrement}/>
    
    
    </>
)

}
}
export default Home
