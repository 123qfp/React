// import { Component } from "react";
// import Counter from "./count";

// class Customstate extends Component{
//     // state={
//     //     IsSubscribe:true,
//     //     txt1:"subscribed",
//     //     txt2:"subscribes",
//     //     fruits:["apple","orange"]

//     // }

//     constructor(){super()
//         this.state={
//             IsSubscribe:true,
//                 txt1:"subscribed",
//                 txt2:"subscribes",
//                 fruits:["apple","orange"]
         
//         }
//     }
//     changesubscribe=()=>{
//         console.log("clicked")
//         this.setState(
//             {
//                 IsSubscribe:true
//             }
//         )
//     }
//     addFruits=()=>{
//         const newFruit=[...this.state.fruits,"new fruit"]
//         this.setState(
//             {
//                 fruits:newFruit
//             }
//         )
//         console.log(this.state.fruits)
//     }
//     deletefruit=(index)=>{
//         console.log(index)
//         const newFruit=this.state.fruits.filter[(eachfruit,i)=>i!=index]
//     }

//     updatefruit=(index)=>{
//         this.state.fruits.map((eachElement,i)=>{
//             if(i===index){
//                 return "pineapple"
//             }
//             else{
//                 return eachElement
//             }
//         })
//     }
//     testFollow=()=>{
//         this.setState({
//             IsSubscribe:!this.state.isfollow
            
//         })
//     }
   
//     render(){
//         return(
           
//             <>
//             <button style={{
//                 color:"white",
//                 backgroundColor:"skyblue"
                
//             }  } onClick={this.changesubscribe}>{this.state.IsSubscribe?this.state.txt1:this.state.txt2}</button>
//        {
        
//         <>
//         <Counter/>
//         <button onClick={this.addFruits}>Add fruit</button>
//     <ol>
//         {
// this.state.fruits.map[(eachElement,index)=>{

// }]
//         }
//     </ol>
//     <li>

//     </li>
//         </>

//        }
//        </>
//         )
//     }
// }
// export default Customstate;