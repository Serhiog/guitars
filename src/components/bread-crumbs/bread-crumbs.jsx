import { paths } from "../../consts";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {

  const location = useLocation();

  const handleMainLink = (evt) => {
    evt.preventDefault();
    location(paths.main);
  };

  const handleCartLink = (evt) => {
    evt.preventDefault();
    location(paths.cart);
  };


  return (
    <div className="crumbs">
      <h1 className="crumbs__title">{location.pathname === paths.main || location.pathname === "/guitars/" ? `Каталог гитар` : `Корзина`}</h1>
      <ul className="crumbs__list">
        <li className="crumbs__item"><a href={`!#`} className="crumbs__item-link" onClick={handleMainLink}>Главная</a></li>
        <li className="crumbs__item"><a href={`!#`} className="crumbs__item-link" onClick={handleCartLink}>Каталог</a></li>
        {location.pathname === paths.cart && <li className="crumbs__item"><a href={`!#`} className="crumbs__item-link">Оформляем</a></li>}
      </ul>
    </div >
  );
};

export default BreadCrumbs;
