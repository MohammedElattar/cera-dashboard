export const castOption = (option, definitions = {id: 'id', newId: 'value', name: 'name', newName: 'label'}) => {
    const tmpOption = {...option}

    if (option[definitions.newId] === undefined && option[definitions.id] !== undefined) {
        tmpOption[definitions.newId] = tmpOption[definitions.id]
        delete tmpOption[definitions.id]
    }

    if (option[definitions.newName] === undefined && option[definitions.name] !== undefined) {
        tmpOption[definitions.newName] = option[definitions.name]
        delete tmpOption[definitions.name]
    }

    return tmpOption;
}

export const castOptions = (options, definition = {id: 'id', newId: 'value', name: 'name', newName: 'label'}) => {
    return options.map((option) => castOption(option, definition))
}

export const getMenuValues = (options) => {
    if (Array.isArray(options)) {
        return options.map((option) => (option.value === undefined ? option.id : option.value));
    } else {
        return options.value === undefined ? options.value : options.id;
    }
}