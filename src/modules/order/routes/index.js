import { lazy } from "react";
import orderRoutes from "../constants/routes";

const OrderContainer = lazy(() => import('../containers/OrderContainer'));
const ShowOrderContainer = lazy(() => import('../containers/ShowOrderContainer'));
const contactUs = [
    {
        path: orderRoutes.TABLE,
        element: <OrderContainer/>
    },
    {
        path: orderRoutes.SHOW,
        element: <ShowOrderContainer />
    }
];

export default contactUs