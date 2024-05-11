import generateSchema, {stringRules} from "../../../utility/helpers/validationRuleHelper";

const colorsSchema = generateSchema({
   name: stringRules(),
   code: stringRules()
})


export default colorsSchema;