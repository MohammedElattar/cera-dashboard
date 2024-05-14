import { lazy } from "react";
import productsRoutes from "../constants/routes";

const ProductContainer = lazy(() => import('../containers/ProductContainer'));
const ProductFormContainer = lazy(() => import('../containers/ProductFormContainer'))
const contactUs = [
    {
        path: productsRoutes.TABLE,
        element: <ProductContainer/>
    },
    {
        path: productsRoutes.EDIT,
        element: <ProductFormContainer />
    },
    {
        path: productsRoutes.ADD,
        element: <ProductFormContainer />
    }
];

export default contactUs