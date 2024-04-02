

function Item() {
    
    const Data = [
        {
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
        {
            "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",          
        },

        {
            "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",   
        },
        {
            "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",      
        },
        {
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        },
        {
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        },
        {
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        },
        {
            "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        },
        {   
            "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        },
        {  
            "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        },
        {
            "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        },
        {
            "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        },
     
    ];
    return (
      <>
        {
        Data.map((x) => {
    
          return(
            <div>
            <img src={x.image } alt=""  height="50px" width="60px" />
          </div>
    
          )
      })
      }
      </>
    )
    }

  export default Item