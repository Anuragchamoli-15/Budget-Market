import Card from "./TrandingDeal-2";

function CardData (){

  const Data = [
  {
    id: 1,
    name: "slim Fit Cotton Shirt",
    category: "shirt",
    brand: "Peater England",
    price: 500,
    rating: 4,
    size: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "slim Fit Cotton Shirt",
    category: "shirt",
    brand: "Peater England",
    price: 500,
    rating: 4,
    size: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "slim Fit Cotton Shirt",
    category: "shirt",
    brand: "Peater England",
    price: 500,
    rating: 4,
    size: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "slim Fit Cotton Shirt",
    category: "shirt",
    brand: "Peater England",
    price: 500,
    rating: 4,
    size: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    name: "slim Fit Cotton Shirt",
    category: "shirt",
    brand: "Peater England",
    price: 500,
    rating: 4,
    size: ["S", "M", "L", "XL", "XXL"],
  },
  ];
  return(<>
  
  {Data.map((data)=> <Card key={data.id} data={data}/>)}
  </>)
}


export default CardData;
