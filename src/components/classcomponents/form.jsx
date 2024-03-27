import { Component } from "react";
import ButtonC from "./button";

class FormC extends Component{
    render(){
        return(
            <div>
                <form action="">
                    <h1>Registration</h1>
                    <input type ="text" placeholder="enter username"/>
                    <input type ="password" placeholder="enter username"/>
<ButtonC/>
                </form>
            </div>
        )
    }
}
export default FormC;