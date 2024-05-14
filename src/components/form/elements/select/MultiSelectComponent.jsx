import CustomSelectComponent from "./CustomSelectComponent";

const MultiSelectComponent = (props) => {
    return <CustomSelectComponent
        isMulti={true}
        closeMenuOnSelect={false}
        {...props}
    />
}

export default MultiSelectComponent;