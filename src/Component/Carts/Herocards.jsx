import style from './Herocards.module.css'

function Herocards(){
    return(<>
    <div className={style.hercontainer}>

    </div>
    <div className={style.herocard}>
        <h2>Flat 40% of in thi moonsoon season</h2>
    </div>
    <div className={style.herocard}>
        <h2>Big deal in this month</h2>
        <p>up to 35% of</p>
    </div>
     <div className={style.herocard}>
        <h2>Fashion sale </h2>
        <p>up to 30% of</p>
    </div>
    </>
    )
}

export default Herocards;