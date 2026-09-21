import Herocards from "../HeroCard/Herocards";
import Card from "../Carts/TrandingDeal-2";
// import TrandingDeal from "../TrendingDeal/TrendingDeal";



function Home(){

    
    return(<>
    
    <main>
        <Herocards></Herocards>


        <div className="dropdown">
            <label htmlFor="categary-select">select your categary</label>
            <select name="categary" id="categary-select">
                <option value="">select your typ</option>
                
                <option value="men">Men</option>
                 <option value="women">Women</option>
                <option value="homedecore">Home Decore</option>
                <option value="grocary">grocary</option>
               <option value="kids">Kids</option>
                <option value="toys">Toys&More</option>
               
              
            </select>

        </div>

       <Card></Card>

{/* <TrandingDeal ></TrandingDeal> */}

        <section className="items section">

            <div className="clothes"></div>
            <div className="home-decore"></div>
            <div className="grocary"></div>
            <div className="kids"></div>
            <div className="toys"></div>

        </section>


    </main>
    
    </>)
}

export default Home;