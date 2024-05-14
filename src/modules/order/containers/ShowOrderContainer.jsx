import {useParams} from "react-router-dom";
import useOrderLogic from "../hooks/useOrderLogic";
import {lazy, useEffect} from "react";

const ShowOrder = lazy(() => import('../views/ShowOrder'))
const ShowOrderContainer = () => {
    const {id} = useParams()
    const {oneOrder, getOneOrderLogic} = useOrderLogic()

    useEffect(() => {
        getOneOrderLogic(id)
    }, []);

    return <ShowOrder data={{oneOrder}}/>
}

export default ShowOrderContainer;