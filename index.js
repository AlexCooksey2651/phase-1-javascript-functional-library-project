function turnObjToArray(collection) {
    if (Array.isArray(collection) === false) {
        let valuesArray = Object.values(collection)
        return valuesArray
    } else {
        return collection
    }
}

// const callback = (parameter) => {
//     console.log(parameter)
// }

function myEach(collection, callback) {
    const array = turnObjToArray(collection)
    for (const item of array) {
        callback(item)
    }
    return collection
}

function myMap(collection, cbFunction) {
    const newArray = turnObjToArray(collection).map(cbFunction)
    return newArray
}

// const cbFunction = (acc, value) => {
//     return acc + value
// }


function myReduce(collection, cbFunction, initVal) {
    const array = turnObjToArray(collection)
    let total = array.reduce(cbFunction, initVal)
    return total
}

function myFind(collection, predicate) {
    const foundItem = turnObjToArray(collection).find(predicate)
    return foundItem
}

function MyFilter(collection, predicate) {
    let array = []
    array.push(turnObjToArray(collection).filter(predicate))
    return array
}

function mySize(collection) {
    const length = turnObjToArray(collection).length
    return length
}

function myFirst(array, n=1) {
    let copyArray = array.slice(0, n)
    if (copyArray.length === 1) {
        return copyArray[0]
    }
    return copyArray
}

function myLast(array, n=1) {
    let copyArray = array.slice(-n)
    if (copyArray.length === 1) {
        return copyArray[0]
    }
    return copyArray
}

