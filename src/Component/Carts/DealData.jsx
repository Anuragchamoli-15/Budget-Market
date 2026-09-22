import Card from "./TrandingDeal-2";
import shirt from "../../assets/shirt.jpeg";
import style from "./Cards.module.css"


function ClothsCardData() {
 const Data = [
    {
        id: 1,
        image: shirt,
        name: "Slim Fit Cotton Shirt",
        category: "shirt",
        brand: "Peter England",
        price: 499,
        rating: 4.2,
        size: ["S", "M", "L", "XL", "XXL"],
    },

    {
        id: 2,
        image: shirt,
        name: "Regular Fit Casual Shirt",
        category: "shirt",
        brand: "Louis Philippe",
        price: 699,
        rating: 4.4,
        size: ["S", "M", "L", "XL"],
    },

    {
        id: 3,
        image: shirt,
        name: "Checked Casual Shirt",
        category: "shirt",
        brand: "Allen Solly",
        price: 599,
        rating: 4.1,
        size: ["M", "L", "XL", "XXL"],
    },

    {
        id: 4,
        image: shirt,
        name: "Premium Linen Shirt",
        category: "shirt",
        brand: "Van Heusen",
        price: 899,
        rating: 4.6,
        size: ["S", "M", "L", "XL"],
    },

    {
        id: 5,
        image: shirt,
        name: "Printed Casual Shirt",
        category: "shirt",
        brand: "Roadster",
        price: 549,
        rating: 4.0,
        size: ["S", "M", "L", "XL", "XXL"],
    },

    {
        id: 6,
        image: shirt,
        name: "Classic Formal Shirt",
        category: "shirt",
        brand: "Louis Philippe",
        price: 799,
        rating: 4.5,
        size: ["S", "M", "L", "XL"],
    },

    {
        id: 7,
        image: shirt,
        name: "Oxford Cotton Shirt",
        category: "shirt",
        brand: "Peter England",
        price: 649,
        rating: 4.3,
        size: ["M", "L", "XL", "XXL"],
    },

    {
        id: 8,
        image: shirt,
        name: "Oversized Casual Shirt",
        category: "shirt",
        brand: "Bewakoof",
        price: 449,
        rating: 4.1,
        size: ["S", "M", "L", "XL"],
    },

    {
        id: 9,
        image: shirt,
        name: "Solid Full Sleeve Shirt",
        category: "shirt",
        brand: "Allen Solly",
        price: 749,
        rating: 4.4,
        size: ["S", "M", "L", "XL", "XXL"],
    },

    {
        id: 10,
        image: shirt,
        name: "Premium Casual Shirt",
        category: "shirt",
        brand: "Van Heusen",
        price: 999,
        rating: 4.7,
        size: ["S", "M", "L", "XL"],
    },
];
  return (
    <>
      <div className={style.boxContainer}>
        {Data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default ClothsCardData;
