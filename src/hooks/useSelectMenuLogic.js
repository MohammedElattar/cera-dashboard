import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../api/axiosInstance";
import {setColorsMenuAction, setColorsMenuLoading} from "../redux/selectMenu";

const useSelectMenuLogic = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.selectMenuReducer),
        colorsMenu = selector.colors.data;

    const getColorsMenu = () => {
        dispatch(setColorsMenuLoading(true));
        axiosInstance.get('/api/select_menu/colors').then((response) => {
            dispatch(setColorsMenuAction(response.data.data))
        })
            .finally(() => dispatch(setColorsMenuLoading(false)))
    }

    return {
        colorsMenu,
        getColorsMenu
    }
}

export default useSelectMenuLogic;