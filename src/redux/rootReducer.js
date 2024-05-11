// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import loginReducer from "../modules/auth/redux/loginReducer";
import notificationReducer from '../modules/notification/redux/notifications'
import chat from '../modules/chat/views/store'
import categoryReducer from '../modules/category/redux'
import loading from '../redux/loading'
import contactUsReducer from '../modules/contactUs/redux'
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    navbar,
    layout,
    loginReducer,
    notificationReducer,
    chat,
    categoryReducer,
    contactUsReducer,
    loading
})

export default rootReducer
