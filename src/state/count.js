import { Component } from "react";

class Counter extends Component{
    state={
        count:0
        
    }
    incrementcount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    Decrementcount=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    resetcount=()=>{
        this.setState({
            count:0
        })
    }

   
    render(){
        return(
            <>
            <h2>count</h2>
              <h2>{this.state.count}</h2>
              <button onClick={this.incrementcount}>incrementcount</button>
            <button onClick={this.Decrementcount}>Decrementcount</button>
            <button onClick={this.resetcount}>resetcount</button>
            {
                this.state.IsSubscribe
            }
         
            </>
          
        )
    }
}
export default Counter