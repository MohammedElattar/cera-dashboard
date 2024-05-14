import useSearch from "../../../utility/hooks/useSearch";
import usePagination from "../../../utility/hooks/usePagination";
import useOrderLogic from "../../order/hooks/useOrderLogic";
import {lazy} from "react";

const OrderTable = lazy(() => import('../views/OrderTable'))

const OrderContainer = () => {
    const {all, meta, getAllOrdersLogic} = useOrderLogic()
    const {handleSearch} = useSearch(getAllOrdersLogic);
    const {
        currentPerPage,
        currentPage,
        setCurrentPageState,
        handlePageChange,
        handlePerPageChange
    } = usePagination(getAllOrdersLogic, meta);

    return <OrderTable
        data={{all}}
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

export default OrderContainer;