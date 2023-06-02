"use strict"

const numbers = [1, 2, 3, 4, 2]
function containsDuplicates(numbers) {
    for (let i = 0; i <= numbers.length - 1; i += 1) {
        for (let j = i + 1; j <= numbers.length; j += 1) {
            if(numbers[i] === numbers[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicates(numbers));