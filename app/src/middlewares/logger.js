const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log("The action: ", action)
    const returnVal = next(action)
    console.log("The new state: ", returnVal)
    console.groupEnd()
    return returnVal
}

export default logger