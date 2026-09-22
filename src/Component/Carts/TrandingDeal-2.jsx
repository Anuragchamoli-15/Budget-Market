import style from "./Cards.module.css"


 function Card ({data }){
    return (
        <>
        
            <div className={style.card}>
                <div className={style.cardImg}>
                    <img src={data.image} alt="" />
                </div>
                <div className={style.cardTitle}>
                    <h2>{data.name}</h2>
                    <h3>{data.brand}</h3>
                </div>
                <div className={style.cardPrce}>
                    <h3>{data.price}</h3>
                    <p>{data.rating}</p>
                </div>
            </div>

        </>

    )
 }

 export default Card;