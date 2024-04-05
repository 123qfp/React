import { Component } from "react";
import axios from "axios";
class Store extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        this.fetchdata()
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
                                            <img src={eachObject.image} alt={"title"} width={100} height={60} />
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