import useContactUsLogic from "../hooks/useContactUsLogic";
import usePagination from "../../../utility/hooks/usePagination";
import ContactUsTable from "../views/ContactUsTable";
import useSearch from "../../../utility/hooks/useSearch";

const ContactUsContainer = () => {
    const {all, meta, getContactUsTableLogic, deleteContactUsLogic} = useContactUsLogic()
    const {handleSearch} = useSearch(getContactUsTableLogic);
    const {
        currentPerPage,
        currentPage,
        setCurrentPageState,
        handlePageChange,
        handlePerPageChange
    } = usePagination(getContactUsTableLogic, meta);

    return <ContactUsTable
        data={{all}}
        handleDelete={deleteContactUsLogic}
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

export default ContactUsContainer;