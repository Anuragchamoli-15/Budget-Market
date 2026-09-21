import style from './Herocard.module.css'
import mansoonImg from "../../assets/masoonOffer.jpeg";


function Herocards(){
    return(<>
    <div className={style.hercontainer}>


    <div className={style.herocard}>
        <h2>Big deal in this month</h2>
        <p>up to 35% of</p>
    </div>

     <div className={style.herocard}>
        <h2>Fashion sale </h2>
        <p>up to 30% of</p>
    </div>

    <div className={style.herocard}>
        <h2>Spacial deal in home decore</h2>
        <p>up to 30%-50% of</p>
        <p>buy now</p>
    </div>

    <div className={style.herocard}>
        <img src={mansoonImg} alt="" />
        <h2>Flat 40% of in thi moonsoon season</h2>
    </div>
  

    </div>
    </>
    )
}

export default Herocards;