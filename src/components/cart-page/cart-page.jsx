import Header from "../header/header";
import Footer from "../footer/footer";
import Guitar from "../guitar/guitar";
import BreadCrumbs from "../bread-crumbs/bread-crumbs";
import Popup from "../popup/popup";
import { paths } from "../../consts";
import { compose } from "redux";
import { WithLoader } from "../../hocs/with-loader"
import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";


const CartPage = (props) => {

    const LazyComponent = lazy(() => import('../filter-sort-container/filter-sort-container'));
    const MyLazyComponent = WithLoader(LazyComponent)
    const location = useLocation();

    return (
        <>
            <Header />
            <Guitar />
            <BreadCrumbs />
        </>
    );
};

export default compose(CartPage);
