import { Home, MessageSquare} from "react-feather"
import colors from '../../modules/color/routes/sidebar'
import contactUs from '../../modules/contactUs/routes/sidebar'
export default [
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
    ...contactUs,
    ...colors
]
