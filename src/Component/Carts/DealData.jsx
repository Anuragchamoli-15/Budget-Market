import Card from "./TrandingDeal-2";
import style from "./Cards.module.css"
import { useEffect, useState } from "react";


function ClothsCardData() {
    const [currntData, setData] =useState([])
    
    useEffect(()=>{
        
        fetch("https://fakestoreapi.com/products")
        .then(res=> res.json())
        .then(data =>setData(data) )
        
    },[])
    console.log(currntData)
    
  return (
    <>
      <div className={style.boxContainer}>
        {currntData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default ClothsCardData;
