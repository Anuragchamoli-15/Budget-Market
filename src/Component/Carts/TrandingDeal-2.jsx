import style from "./Cards.module.css"


 function Card ({data }){
   
    return (
        <>
        {
            data.category !== "electronics" && data.category !=="jewelery"  && <div className={style.card}>
                <div className={style.cardImg}>
                    <img src={data.image} alt="" />
                </div>
                <div className={style.cardTitle}>
                    <button className={style.addCartBtn}>Add</button>
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