import Select from "react-select";
import {castOptions} from "../../../../utility/helpers/selectHelper";
import {selectThemeColors} from "../../../../utility/Utils";
import {useEffect, useState} from "react";

const CustomSelectComponent = (props) => {
    let {options, value} = props;
    const [values, setValues] = useState([])

    useEffect(() => {
        setValues(value)
    }, [value]);

    if (options !== undefined) {
        options = castOptions(options);
    }

    if (value !== undefined) {
        value = castOptions(value)
    }

    const handleChange = (selectedValues) => {
        if (selectedValues === null) {
            return null;
        }

        if (Array.isArray(selectedValues)) {
            setValues(selectedValues);
        } else {
            setValues(selectedValues);
        }

        return selectedValues
    }

    console.log('default value', value)

    return <Select
        className='react-select'
        classNamePrefix='select'
        isClearable={true}
        {...props}
        onChange={
        props.onChange === undefined ? handleChange : (selected) => props.onChange(handleChange(selected))
    }
        theme={selectThemeColors}
        options={options}
        value={values}
    />
}

export default CustomSelectComponent;