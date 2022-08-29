import Filter from "../filter/filter";
import Sorting from "../sorting/sorting";
import { paths } from "../../consts";
import { useLocation } from "react-router-dom";
import { lazy } from "react";
import { WithLoader } from "../../hocs/with-loader"

const FilterSortContainer = () => {

  const location = useLocation();
  const MyLazyItemsContainerWithLoader = WithLoader(lazy(() => import("../items-container/items-container")));
  const MyLazyCartWithLoader = WithLoader(lazy(() => import("../cart/cart")));

  if (location.pathname === paths.cart) {
    return (
      <div className="filterSortContainer">
        <MyLazyCartWithLoader />
      </div>)

  } else {
    return (
      <div className="filterSortContainer">
        <Filter />
        <Sorting />
        <MyLazyItemsContainerWithLoader />
      </div>
    );
  }

};

export default FilterSortContainer;
