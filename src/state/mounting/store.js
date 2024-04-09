import { Component } from "react";
import axios from "axios";
class Store extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        this.fetchdata()
    }


    lowtohigh=()=>{
        const result=this.state.products.sort((a,b)=>a.price-b.price)
        this.setState({
            products:result
               
            }
        )
    }
    hightolow=()=>{
        const result=this.state.products.sort((a,b)=>b.price-a.price)
        this.setState(
            {
                products:result
            }
        )
    }


    fetchdata = async () => {

        const res = await axios("https://fakestoreapi.com/products")
        console.log(res.data)

        this.setState({
            products: res.data
        })
    }

    delete=(index)=>{
        const res=this.state.products.filter((eachObj,i)=>i!==index)
     this.setState(  {
        products:res
     } )
    }


    render() {
        return (

            <>
            <div className="Name">
                <h3>product list</h3>
                <button on onClick={this.lowtohigh}>Filter from low to high</button>
                <button on onClick={this.hightolow}>Filter from high to low</button>
                </div>
                {
                    this.state.products.length > 0
                        ?
                        <div className="list">
                         
                            {

                                this.state.products.map((eachObject,index) => {
                                    
                                    return (

                                        <div className="cards">
                                            <h4>{eachObject.title}</h4>
                                            <img src={eachObject.image} alt={"title"} width={100} height={60}/>
                                            <h3>{eachObject.category}</h3>
                                            <h3>₹{eachObject.price}</h3>
                                            <button style={{Top:"45px",backgroundColor:"skyblue"}} onClick={()=>this.delete(index)}>Delete</button>
                                         

                                        </div>

                                    )
                                })
                            }
                        </div>
                        :
                        <h3 className="Name">No product</h3>
                }

            </>
        )
    }
}

export default Store