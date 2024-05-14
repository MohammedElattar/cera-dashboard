import generateSchema, {
    arrayRules,
    integerRules,
    longTextRules,
    stringRules
} from "../../../utility/helpers/validationRuleHelper";

const productSchema = generateSchema({
    name: stringRules(),
    quantity: integerRules(),
    price: integerRules(),
    description: longTextRules(),
    colors: arrayRules(),
    sizes: arrayRules()
})

export default productSchema;