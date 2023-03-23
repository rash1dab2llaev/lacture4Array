/*1 find
 function getFirstChild(arr) {
    return arr.find((a, b) => { return b < 1 })
}
console.log(getFirstChild([1, 2, 3])); */

/*2 
function getLastChild(arr) {
    return arr.pop()
}
console.log(getLastChild([1, 2, 3])); */


/* 3
function reverseArr(arr) {
    return arr.reverse()
}
console.log(reverseArr([1, 2, 3, 4])); */

/* 4
function addToStr(arr) {
    return arr.join('')
}
console.log(addToStr([1, 2, 3, 'hhh', true])); */

/* 5
function func(arr,n) {
    return arr[Math.floor(n)]
}
console.log(func([1, 2, 3, 4, 5, 6], 10 / 2)); */

/*6 
function concatArr(arr1, arr2) {
    return arr1.concat(arr2)
}
console.log(concatArr([1, 2], [4, 5, 6, 7])); */

/*7 
function indexElem(arr, n) {
    return arr.indexOf(n)
}
console.log(indexElem(['ab', 'cs', 'gh'], 'gh')); */

/*8 
function returnType(arr) {
    return arr.map((elem) => { return typeof (elem) })
}
console.log(returnType([1, 2, 'nul', true])); */

/* 9
function toStr(arr) {
    return arr.map(elem => { return elem.toString()})
}
console.log(toStr([112, 453, '234', '456'])); */


/* 10
function wordLength(arr) {
    return arr.map(elem => { return elem.length})
}
console.log(wordLength(['hello', 'hello'])); */

/* 11
function filterArray(arr) {
    return arr.filter((elem) => {
        return typeof (elem) == "number"
    })
}
console.log(filterArray([1, 2, 'tr', 4, 'uy']));
 */


/* function countTrue(arr) {
    let cout = 0
    return arr.filter((elem) => { return elem == tru})
}

console.log(countTrue([true, true, true, false])); */


function secondLargeElem(arr) {
    return arr.sort((a, b) => { return a-b})
}
console.log(secondLargeElem([1, 4, 3, 5, 2]));