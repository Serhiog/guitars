import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { paths } from "../../consts";
import { useLocation, Link } from "react-router-dom";

function Header({ selectedGuitarsID }) {

  const location = useLocation();
  const [burger, setBurger] = useState(false);

  const handleBurgerOpen = () => {
    setBurger(true);
  };
  const handleBurgerClose = () => {
    setBurger(false);
  };

  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
  }, [width]);

  window.addEventListener(`resize`, () => {
    setWidth(window.innerWidth);
  });

  const handleCart = (evt) => {
    evt.preventDefault();
    location(paths.cart);
  };

  const handleCatalog = (evt) => {
    evt.preventDefault();
    location(paths.main);
  };

  return (
    <header className={burger && width < 769 ? `header header--burger-active` : `header`}>
      <div className="header__inner">
        <button className="header__burger" onClick={handleBurgerOpen}></button>
        <Link to="/">
          <div className="header__logo">
          </div>
        </Link>
        <ul className="header__nav">
          <li className="header__nav-item">
            <button className="header__nav-item-close" onClick={handleBurgerClose}></button>
          </li>
          <li className="header__nav-item">
            <a tabIndex={0} className="header__nav-item-link" href="/" onClick={() => handleCatalog}>Каталог</a>
          </li>
          <li className="header__nav-item">
            <a tabIndex={0} className="header__nav-item-link" href="/"> Где купить?</a>
          </li>
          <li className="header__nav-item">
            <a tabIndex={0} className="header__nav-item-link" href="/">О компании</a>
          </li>
          <li className="header__nav-item header__nav-item--services">
            <a tabIndex={0} className="header__nav-item-link" href="/">Cервис-центры</a>
          </li>
          <li className="header__nav-item header__nav-item--shops">
            <a tabIndex={0} className="header__nav-item-link" href="/">Магазины</a>
          </li>
        </ul>
        <ul className="header__user">
          <li className="header__user-item header__user-item--location">
            <a tabIndex={0} className="header__user-item-link" href="/">Location</a>
          </li>
          <li className="header__user-item header__user-item--search">
            <a tabIndex={0} className="header__user-item-link" href="/">Search</a>
          </li>
          <li className="header__user-item header__user-item--cart">
            <a tabIndex={0} className="header__user-item-link header__user-item-link--cart" href="/" onClick={() => handleCart}>
              Cart
              <span className="header__user-item-link-count">{selectedGuitarsID.length > 0 && selectedGuitarsID.length}</span>
            </a>
          </li>
        </ul>
      </div>
    </header >
  );
}

const mapStateToProps = (state) => ({
  selectedGuitarsID: state.selectedGuitarsID
});

export default connect(mapStateToProps)(Header);
