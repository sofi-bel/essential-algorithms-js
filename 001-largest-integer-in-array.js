const numbers = [1, 2, 3, 4]
function findLargest(numbers) {
    let largest = numbers[0];

    for (const key in numbers) {
        if(numbers[key] > largest) {
            largest = numbers[key];
        }
    }
    return largest
}

console.log(findLargest(numbers))
