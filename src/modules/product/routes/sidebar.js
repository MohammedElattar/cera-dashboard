import {ShoppingCart} from "react-feather";
import productsRoutes from "../constants/routes";


const sideBar = [
    {
        id: "products",
        title: "Products",
        icon: <ShoppingCart  size={20} />,
        navLink: productsRoutes.TABLE
    }
];

export default sideBar;