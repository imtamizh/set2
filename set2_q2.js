function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }

    return uniqueIndex + 1; // Length is index + 1
}

function processArray() {
    const input = document.getElementById('array-input').value;
    const array = input.split(',').map(Number); // Convert input to an array of numbers
    const newLength = removeDuplicates(array);
    
    // Update the results in the HTML
    document.getElementById('new-length').innerText = newLength;
    document.getElementById('result-array').innerText = array.slice(0, newLength).join(', ');
}
