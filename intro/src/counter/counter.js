import React from'react';
class counter extends React.Component{

    render(){
        return(
            <h2> counter count:{this.props.count}</h2>
        )
    }
}

export default counter; 
