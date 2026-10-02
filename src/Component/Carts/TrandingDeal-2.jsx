import style from "./Cards.module.css"


import { useContext } from "react";
import DataContext from "../Store";



 function Card ({data}){

    const {setItem , currntItem} = useContext(DataContext)

    const handleclick =()=>{
        let newData = [...currntItem , data]
        setItem(newData)
    }
   
    return (
        <>
        {/* <Basket cartItem={cartItem}></Basket> */}
        {
            data.category !== "electronics" && data.category !=="jewelery"  && <div className={style.card}>
                <div className={style.cardImg}>
                    <img src={data.image} alt="" />
                </div>
                <div className={style.cardTitle}>
                    <button className={style.addCartBtn} onClick={ handleclick}>Add</button>
                    <h2>{data.title}</h2>
                    {/* <h3>{data.description}</h3> */}
                </div>
                <div className={style.cardPrce}>
                    <h3>{data.price}</h3>
                    <p>{data.rating.rate}</p>
                </div>
            </div>
        }
           

        </>

    )
 }

 export default Card;