import { lazy } from "react";
import colorRoutes from "../constants/routes";

const ColorContainer = lazy(() => import('../containers/ColorContainer'));
const ColorFormContainer = lazy(() => import('../containers/ColorFormContainer'))
const contactUs = [
    {
        path: colorRoutes.TABLE,
        element: <ColorContainer/>
    },
    {
        path: colorRoutes.EDIT,
        element: <ColorFormContainer />
    },
    {
        path: colorRoutes.ADD,
        element: <ColorFormContainer />
    }
];

export default contactUs