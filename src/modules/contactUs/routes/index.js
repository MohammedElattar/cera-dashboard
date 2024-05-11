import { lazy } from "react";
import contactUsRoutes from "../constants/routes";

const ContactUsContainer = lazy(() => import('../containers/ContactUsContainer'));

const contactUs = [
    {
        path: contactUsRoutes.TABLE,
        element: <ContactUsContainer/>
    }
];

export default contactUs