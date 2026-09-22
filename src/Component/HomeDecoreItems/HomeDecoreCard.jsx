import style from "../Carts/cards.module.css";
import HomeDecore from "./HomeDecore";

function HomeDecoreCard() {
  const homeDecoreItems = [
    {
      id: 1,
      name: "Decorative Wall Clock",
      price: 1299,
      category: "Wall Decor",
      rating: 4.5,
      image: "/images/wall-clock.jpg",
    },
    {
      id: 2,
      name: "Artificial Flower Vase",
      price: 699,
      category: "Table Decor",
      rating: 4.3,
      image: "/images/flower-vase.jpg",
    },
    {
      id: 3,
      name: "Golden Table Lamp",
      price: 1599,
      category: "Lighting",
      rating: 4.6,
      image: "/images/table-lamp.jpg",
    },
    {
      id: 4,
      name: "Decorative Wall Mirror",
      price: 1899,
      category: "Wall Decor",
      rating: 4.4,
      image: "/images/wall-mirror.jpg",
    },
    {
      id: 5,
      name: "Ceramic Showpiece",
      price: 899,
      category: "Showpiece",
      rating: 4.2,
      image: "/images/ceramic-showpiece.jpg",
    },
    {
      id: 6,
      name: "Scented Candle Set",
      price: 499,
      category: "Home Fragrance",
      rating: 4.7,
      image: "/images/scented-candle.jpg",
    },
    {
      id: 7,
      name: "Decorative Cushion Set",
      price: 799,
      category: "Cushion",
      rating: 4.1,
      image: "/images/cushion-set.jpg",
    },
    {
      id: 8,
      name: "Wooden Wall Shelf",
      price: 1099,
      category: "Wall Decor",
      rating: 4.5,
      image: "/images/wall-shelf.jpg",
    },
    {
      id: 9,
      name: "Decorative Indoor Plant",
      price: 599,
      category: "Plants",
      rating: 4.4,
      image: "/images/indoor-plant.jpg",
    },
    {
      id: 10,
      name: "Luxury Decorative Tray",
      price: 999,
      category: "Table Decor",
      rating: 4.3,
      image: "/images/decorative-tray.jpg",
    },
  ];
  return (
    <>
      <div className={style.boxContainer}>
        {homeDecoreItems.map((item) => (
          <HomeDecore key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default HomeDecoreCard;
