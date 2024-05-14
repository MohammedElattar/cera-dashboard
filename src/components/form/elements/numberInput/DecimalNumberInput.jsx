import IntegerNumberInput from "./IntegerNumberInput";
import ErrorBox from "../../ErrorBox";

const DecimalNumberInput = (props) => {
    return (
        <>
            <IntegerNumberInput step={0.1} {...props}/>
        </>
    )
}

export default DecimalNumberInput;