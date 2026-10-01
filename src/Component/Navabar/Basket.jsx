import style from "./style.module.css"

function Basket({cartItem}) {
    console.log(cartItem)
  return (
    <>
    {/* {cartItem? "Not Item Here": } */}
    {/* <div className={style.cartContainer}>
        <div className={style.cartImg}>
          <img src={cartItem.image} alt="" />
        </div>
        <div className={style.cardTitle}>
          <h2>{cartItem.title}</h2>
          <h3>{cartItem.description}</h3>
        </div>
        <div className={style.cardPrce}>
          <h3>{cartItem.price}</h3>
          <p>{cartItem.rating.rate}</p>
        </div>
      </div> */}
      {/* <h1>Hello</h1> */}
     
    </>
  );
}

export default Basket;
