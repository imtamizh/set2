function reverseArray(arr) {
    let left = 0; 
    let right = arr.length - 1; 

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr; 
}

document.getElementById("reverseButton").addEventListener("click", function() {
    const input = document.getElementById("inputArray").value;
    const array = input.split(',').map(Number); // Convert input string to an array of numbers
    const reversedArray = reverseArray(array);
    document.getElementById("result").textContent = "Reversed array: " + reversedArray.join(', ');
});