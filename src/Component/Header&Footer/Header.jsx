import style from "./HeaderFooter.module.css";

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
        <a href="home">Home</a>
        <a href="cart">Basket</a>
        <a href="favroit">WishList</a>
        <a href="profile">Profile</a>
      </div>
    </nav>
  </div>
</header>
  );
}

export default Header;
