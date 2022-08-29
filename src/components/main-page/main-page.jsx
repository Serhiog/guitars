import Header from "../header/header";
import Footer from "../footer/footer";
import Guitar from "../guitar/guitar";
import BreadCrumbs from "../bread-crumbs/bread-crumbs";
import Popup from "../popup/popup";
import FilterSortContainer from "../filter-sort-container/filter-sort-container";

const MainPage = () => {

  return (
    <>
      <Header />
      <Guitar />
      <BreadCrumbs />
      <FilterSortContainer />
      {/* < Footer />
      <Popup />  */}
    </>
  );
};

export default MainPage;
