
// using forEach loop.
// time complexity is O(n)
const twoSum = (arr, target) => {
    // initial values for the array n1,n2
    let n1;
    let n2;
    // loop through the array
    arr.forEach((num1, index1) => {
        // loop through the array again
        arr.forEach((num2, index2) => {
            //check if the sum of the two numbers is equal to the target
            if (index1 !== index2 && num1 + num2 === target) {
                // if it is equal, set the values of n1 and n2 to the index of the numbers
                n1 = arr.indexOf(num2)
                n2 = arr.indexOf(num1)

            }
        })
    })
    // return the values of n1 and n2
    return [n1, n2]
}
console.log(twoSum([2, 7, 11, 15], 9))


// using recursive function.
// time complexity is O(n^2)
const twoSumRecursion = (arr, target) => {
    if (arr[0] + arr[1] === target) {
        // if the sum of the first two numbers is equal to the target, return the index of the numbers
        const n1 = arr.indexOf(arr[0])
        const n2 = arr.indexOf(arr[1])
        return [n1, n2]
    }
    else {
        // if the sum of the first two numbers is not equal to the target, remove the first number from the array
        return twoSumRecursion(arr.slice(1), target)

    }
}
console.log(twoSumRecursion([2, 7, 11, 15], 9))

// using while loop.
// time complexity is O(n)
function twoSumWhile(arr, target) {
    // initial values for the array n1,n2
    let n1;
    let n2;
    // set the index of the first number to 0
    let index = 0;
    while (index < arr.length) {
        // if the sum of the first two numbers is equal to the target, return the index of the numbers
        if (arr[index] + arr[index + 1] === target) {
            // if it is equal, set the values of n1 and n2 to the index of the numbers
            n1 = arr.indexOf(arr[index])
            n2 = arr.indexOf(arr[index + 1])
            return [n1, n2]
        }
        // increment the index by 1
        index++
    }

}
console.log(twoSumWhile([2, 7, 11, 15], 9))


