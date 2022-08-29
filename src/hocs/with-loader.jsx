import { Suspense } from "react"
import ClipLoader from "react-spinners/ClipLoader";

export const WithLoader = (Component) => {

    return function (props) {

        return (
            <Suspense fallback={<ClipLoader size={150} margin={"0, auto"}/>}>
                <Component props={props} />
            </Suspense>)
    }
}





