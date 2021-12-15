function turnObjToArray(collection) {
    if (Array.isArray(collection) === false) {
        let valuesArray = Object.values(collection)
        return valuesArray
    } else {
        return collection
    }
}

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


function myReduce(collection, cbFunction, initVal) {
    let array = turnObjToArray(collection)
    if (!initVal) {
        initVal = array[0]
        array = array.slice(1)
    }
    for (let i = 0; i < array.length; i++) {
        initVal = cbFunction(initVal, array[i], array) 
    }
    return initVal
}

function myFind(collection, predicate) {
    const foundItem = turnObjToArray(collection).find(predicate)
    return foundItem
}

function myFilter(collection, predicate) {
    const newArray = turnObjToArray(collection)
    return newArray.filter(predicate)
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

function myKeys(object) {
    return Object.keys(object)
}

function myValues (object) {
    return Object.values(object)
}

