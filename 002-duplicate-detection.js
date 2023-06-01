const numbers = [1, 2, 3, 4, 2]
function containsDuplicates(numbers) {
    for (let i = 0; i <= numbers.length; i += 1) {
        for (let j = 0; j <= numbers.length; j += 1) {
            if(i !== j) {
                if(numbers[i] === numbers[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(containsDuplicates(numbers));