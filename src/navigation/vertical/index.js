import { Home, MessageSquare} from "react-feather"
import colors from '../../modules/color/routes/sidebar'
import products from '../../modules/product/routes/sidebar'
import contactUs from '../../modules/contactUs/routes/sidebar'
import orders from '../../modules/order/routes/sidebar'

export default [
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/home"
  },
    ...contactUs,
    ...colors,
    ...products,
    ...orders
]
