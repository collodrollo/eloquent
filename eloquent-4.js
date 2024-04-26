const range = (start, end, step=1) => {
    const arr = []
    for (;start <= end; start += step){
        arr.push(start)
    }
    return arr;
}

const sum = (arr) => {
    let total = 0;
    for (let num of arr) {
        total += num
    }
    return total
}

const reverseArray = (arr) => {
    const newArray = []
    j = arr.length - 1
    while (j >= 0) {
        newArray.push(arr[j])
        j -= 1
    }
    return newArray
}

const reverseArrayInPlace = (arr) => {
    let i = 0;
    let j = arr.length - 1

    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i += 1
        j -= 1
    }
    return arr
}

const arrayToList = (arr) => {
    let head = null;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        head = {val: arr[i], next: head}
    }
    return head
}

const listToArray = (head) => {
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr
}

const prepend = (head, val) => {
    return {val, next: head}
}

const nth = (head, n) => {
    while (n > 0) {
        head = head?.next
        n -= 1
    }
    return head?.val
}

const nthRecursive = (head, n) => {
    if (n < 0 || head === undefined) {
        return undefined
    }
    if (n === 0) {
        return head?.val
    }
    return nthRecursive(head?.next, n - 1)
}

const deepComparison = (obj1, obj2) => {
    if (obj1 === null && obj2 === null) {
        return true;
    }

    if (obj1 === null || obj2 === null) {
        return false;
    }

    for (let key of Object.keys(obj1)) {
        if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
            if (!deepComparison(obj1[key], obj2[key])) {
                return false;
            }
        } else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    for (let key of Object.keys(obj2)) {
        if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
            if (!deepComparison(obj1[key], obj2[key])) {
                return false;
            }
        } else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}
