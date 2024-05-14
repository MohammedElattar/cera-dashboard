import {lazy, useEffect, useState} from "react";
import useProductLogic from "../hooks/useProductLogic";
import {useParams} from "react-router-dom";
import {buildFormikParams, formikInstance} from "../../../utility/formik/formikHelper";
import productSchema from "../validation";
import useSelectMenuLogic from "../../../hooks/useSelectMenuLogic";
import {getMenuValues} from "../../../utility/helpers/selectHelper";

const ProductForm = lazy(() => import('../views/ProductForm'))
export const emptyProductInitial = {
    name: '',
    quantity: 1,
    price: 1,
    description: '',
    colors: [],
    sizes: [],
    image: ''
}

const ProductFormContainer = () => {
    const {getOneProductLogic, updateProductLogic, storeProductLogic, oneProduct} = useProductLogic()
    const {getColorsMenu, colorsMenu} = useSelectMenuLogic()
    const {id} = useParams();
    const [image, setImage] = useState(null);
    const inUpdate = id !== undefined;
    const formik = formikInstance({
        initialValues: !inUpdate ? emptyProductInitial : {
            name: oneProduct.name,
            quantity: oneProduct.quantity,
            price: oneProduct.price,
            colors: oneProduct.colors || [],
            description: oneProduct.description || '',
            sizes: oneProduct.sizes || [],
            image: ''
        },
        validationSchema: productSchema,
        onSubmit: (values) => {
            values['colors'] = getMenuValues(values.colors)
            console.log(values)

            values['image'] = image;
            const formData = new FormData();

            for (const key in values) {
                console.log('key is', key)
                if (['colors', 'sizes'].includes(key)) {
                    console.log('iam here')
                    values[key].map((value, index) => {
                        formData.append(`${key}[${index}]`, value)
                    })
                } else {
                    if (values[key] !== null) {
                        formData.append(key, values[key])
                    }
                 }
            }

            if (inUpdate) {
               updateProductLogic(formData, id, buildFormikParams(formik))
            } else {
                storeProductLogic(formData, buildFormikParams(formik))
            }
        }});

    useEffect(() => {
        const fetchData = async function() {
            await getColorsMenu()

            if (inUpdate) {
                await getOneProductLogic(id)
            }
        }

        fetchData()
    }, []);


    console.log('formik', formik, colorsMenu)
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

    return <ProductForm
        inUpdate={inUpdate}
        data={{colorsMenu}}
        setImage={setImage}
        formikObject={{handleBlur, handleChange, handleSubmit, values, errors, isSubmitting, isValid, setFieldValue, resetForm}}
    />
}

export default ProductFormContainer;