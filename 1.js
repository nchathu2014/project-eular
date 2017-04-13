/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.Find the sum of all the multiples of 3 or 5 below 1000.
 */
var array = [];
var divideNums = [];

/**
 * Populate the array of elements
 * @param {*} length 
 */
function defineArray(length) {
    for (var i = 1; i <= length; i++) {
        array.push(i)
    }
    return array;
}

/**
 * Filter the numbers upon division
 * @param {*} num1 
 * @param {*} num2 
 */
function calculateDivide(num1, num2) {
    for (var j = 0; j < array.length - 1; j++) {
        if ((array[j] % num1 == 0) || (array[j] % num2 == 0)) {
            divideNums.push(array[j])
        }
    }

}

/**
 * Calculate the sum of the filtered array
 * @param {*} divideNums 
 */
function getSumOfDivideArray(divideNums) {
    var sum = 0;

    for (var k = 0; k < divideNums.length; k++) {
        sum = sum + divideNums[k];
    }
    return sum;
}

defineArray(1000);
calculateDivide(3, 5);
console.log(array);
console.log(divideNums);
console.log(getSumOfDivideArray(divideNums));//233168
