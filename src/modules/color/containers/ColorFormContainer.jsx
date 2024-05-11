import {useParams} from "react-router-dom";
import {lazy, useEffect} from "react";
import useColorLogic from "../hooks/useColorLogic";
import {buildFormikParams, formikInstance} from "../../../utility/formik/formikHelper";
import colorsSchema from "../validation/colorsSchema";

const ColorForm = lazy(() => import('../views/ColorForm'))
export const emptyColorForm = {
    name: '',
    code: '#eeeeee'
}

const ColorFormContainer = () => {
    const {getOneColorLogic, updateColorLogic, storeColorLogic, oneColor} = useColorLogic();
    const {id} = useParams();
    const inUpdate = id !== undefined;

    const formik = formikInstance({
        initialValues: !inUpdate ? emptyColorForm : {
            name: oneColor.name,
            code: oneColor.code
        },
        validationSchema: colorsSchema,
        onSubmit: (values) => {
            if (inUpdate) {
                updateColorLogic(values, id, buildFormikParams(formik))
            } else {
                storeColorLogic(values, buildFormikParams(formik))
            }
        }});

    useEffect(() => {
        if (inUpdate) {
            getOneColorLogic(id)
        }
    }, []);

    const {
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        isValid,
        isSubmitting,
        setFieldValue,
        resetForm
    } = formik

    return <ColorForm
        inUpdate={inUpdate}
        formikObject={{handleBlur, handleChange, handleSubmit, values, errors, isSubmitting, isValid, setFieldValue, resetForm}}
    />
}

export default ColorFormContainer;