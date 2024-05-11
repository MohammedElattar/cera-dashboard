import { Mail } from "react-feather";
import contactUsRoutes from '../constants/routes'

const sideBar = [
    {
        id: "contact-us",
        title: "Contact Us",
        icon: <Mail size={20} />,
        navLink: contactUsRoutes.TABLE
    }
];

export default sideBar;