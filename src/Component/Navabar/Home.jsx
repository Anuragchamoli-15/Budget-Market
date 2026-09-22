import Herocards from "../HeroCard/Herocards";
import CardData from "../Carts/DealData";
import Dropdown from "../Dropdown/Dropdown.";

function Home() {
  return (
    <>
      <main>
        <Herocards></Herocards>
        <Dropdown></Dropdown>
        <CardData></CardData> {/* clothessection */}
        
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
