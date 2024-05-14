// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import loginReducer from "../modules/auth/redux/loginReducer";
import notificationReducer from '../modules/notification/redux/notifications'
import chat from '../modules/chat/views/store'
import categoryReducer from '../modules/category/redux'
import loading from '../redux/loading'
import contactUsReducer from '../modules/contactUs/redux'
import colorsReducer from '../modules/color/redux'
import productReducer from '../modules/product/redux'
import selectMenuReducer from './selectMenu'
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    navbar,
    layout,
    loginReducer,
    notificationReducer,
    chat,
    categoryReducer,
    contactUsReducer,
    colorsReducer,
    productReducer,
    selectMenuReducer,
    loading
})

export default rootReducer
