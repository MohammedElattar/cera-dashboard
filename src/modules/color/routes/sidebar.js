import {Mail, PenTool} from "react-feather";
import colorRoutes from "../constants/routes";


const sideBar = [
    {
        id: "colors",
        title: "Colors",
        icon: <PenTool size={20} />,
        navLink: colorRoutes.TABLE
    }
];

export default sideBar;