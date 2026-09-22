import Herocards from "../HeroCard/Herocards";
import ClothsCardData from "../Carts/DealData";
import Dropdown from "../Dropdown/Dropdown.";
import HomeDecoreCard from "../HomeDecoreItems/HomeDecoreCard";

function Home() {
  return (
    <>
      <main>
        <Herocards></Herocards>
        <Dropdown></Dropdown>
        <ClothsCardData></ClothsCardData> {/* clothessection */}
        <HomeDecoreCard></HomeDecoreCard>

        <section className="items section">
          <div className="home-decore"></div>
          <div className="grocary"></div>
          <div className="kids"></div>
          <div className="toys"></div>
        </section>
      </main>
    </>
  );
}

export default Home;
