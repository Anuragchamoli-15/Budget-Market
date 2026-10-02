import style from "./style.module.css"
import { useContext } from "react";
import DataContext from "../Store";

function Basket() {
    const {name ,currntItem} = useContext(DataContext)

    
    let newList = currntItem.filter((item,index,array)=> 
    array.findIndex((ind) => ind.id === item.id) === index
    )
    return (
      <>
    {newList.length === 0? "Not Item Here":newList.map((item) => 
       <div className={style.cartContainer} key={item.id}>
         <div className={style.cartImg}>
           <img src={item.image} alt="" />
           <button>Remove</button>
         </div>
         <div className={style.cardTitle}>
           <h2>{item.title}</h2>
           <h3>{item.description}</h3>
         </div>
       <div className={style.cardPrce}>
           <h3>Price Rs.{item.price}</h3>
         </div>
       </div>
     )}
    

    
    
    
     
    </>
  );
}

export default Basket;
