import style from "./HeaderFooter.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
   <header className={style.header}>
  <div className={style.head}>
    <nav>
      <div className={style.headSearch}>
        <label htmlFor="searchBar">Search</label>
        <input type="text" id="searchBar" />
      </div>

      <div className={style.headLinks}>
        <Link to="/">Home</Link>
        <Link to="basket">Basket</Link>
        <Link to ="wishList">WishList</Link>
        <Link to ="profile">Profile</Link>
      </div>
    </nav>
  </div>
</header>
  );
}

export default Header;
