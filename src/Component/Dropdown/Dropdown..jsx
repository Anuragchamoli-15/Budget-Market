import style from "./Dropdown.module.css"

function Dropdown() {
  return (
    <>
      <div className={style.dropdown}>
        <label htmlFor="categary-select">select your categary</label>
        <select name="categary" id="categary-select" className={style.dropdownSelect}>
          <option value="">select your typ</option>

          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="homedecore">Home Decore</option>
          <option value="grocary">grocary</option>
          <option value="kids">Kids</option>
          <option value="toys">Toys&More</option>
          <option value="electronic">Electronic</option>
        </select>
      </div>
    </>
  );
}

export default Dropdown
