import {lazy} from "react";
import useSearch from "../../../utility/hooks/useSearch";
import usePagination from "../../../utility/hooks/usePagination";
import useProductLogic from "../hooks/useProductLogic";

const ProductTable = lazy(() => import('../views/ProductTable'))
const ProductContainer = () => {
    const {all, meta, getAllProductsLogic, deleteProductLogic} = useProductLogic()
    const {handleSearch} = useSearch(getAllProductsLogic);
    const {
        currentPerPage,
        currentPage,
        setCurrentPageState,
        handlePageChange,
        handlePerPageChange
    } = usePagination(getAllProductsLogic, meta);

    return <ProductTable
        data={{all}}
        handleDelete={deleteProductLogic}
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

export default ProductContainer;