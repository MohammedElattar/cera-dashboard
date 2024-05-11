import {lazy} from "react";
import useColorLogic from "../hooks/useColorLogic";
import useSearch from "../../../utility/hooks/useSearch";
import usePagination from "../../../utility/hooks/usePagination";

const ColorTable = lazy(() => import('../views/ColorTable'))

const ColorContainer = () => {
    const {all, meta, getAllColorsLogic, deleteColorLogic} = useColorLogic()
    const {handleSearch} = useSearch(getAllColorsLogic);
    const {
        currentPerPage,
        currentPage,
        setCurrentPageState,
        handlePageChange,
        handlePerPageChange
    } = usePagination(getAllColorsLogic, meta);

    return <ColorTable
        data={{all}}
        handleDelete={deleteColorLogic}
        handleSearch={handleSearch}
        paginationObject={{
            meta,
            currentPerPage,
            currentPage,
            setCurrentPageState,
            handlePageChange,
            handlePerPageChange
        }}
    />
}

export default ColorContainer;