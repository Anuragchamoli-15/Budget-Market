import { useState } from "react";
import style from "../Carts/cards.module.css";
import HomeDecore from "./HomeDecore";

function HomeDecoreCard() {
  const [productData , setProductData] =useState([])
 
    fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data =>setProductData(data))
  return (
    <>
      <div className={style.boxContainer}>
        {productData.map((item) => (
          <HomeDecore key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default HomeDecoreCard;
