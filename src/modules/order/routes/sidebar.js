import {ShoppingCart} from "react-feather";
import orderRoutes from "../constants/routes";


const sideBar = [
    {
        id: "orders",
        title: "Orders",
        icon: <ShoppingCart  size={20} />,
        navLink: orderRoutes.TABLE
    }
];

export default sideBar;