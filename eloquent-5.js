const arrs = [[1, 2, 3], [4, 5], [6]]

const flattened = arrs.reduce((arr1, arr2) => arr1.concat(arr2));


function higherOrderLoop(val, test, update, body) {
    for (; test(val); val = update(val)) {
        body(val);
    }
}

function every(array, pred) {
    return !array.some(x => !pred(x));
}

const pred = n => n < 10;

console.log(every([1, 3, 5], pred))
console.log(every([2, 4, 16], pred))
console.log(every([], pred))
