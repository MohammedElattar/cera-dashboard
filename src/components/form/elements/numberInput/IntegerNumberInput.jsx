import {Minus, Plus} from "react-feather";
import InputNumber from "rc-input-number";
import '../../../../@core/scss/react/libs/input-number/input-number.scss'
import ErrorBox from "../../ErrorBox";

const IntegerNumberInput = (props) => {
    return <><InputNumber
        changeOnBlur={true}
        changeOnWheel={false}
        min={1}
        upHandler={<Plus />}
        downHandler={<Minus />}
        step={1}
        {...props}
    />
        <ErrorBox message={props?.error || ''}/>
        </>
}

export default IntegerNumberInput;