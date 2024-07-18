var arr = [2, 2, 5,5, 8, 5, 4, 6, 8, 2];
var freq ={};
var maxFreq= 0;
var mostFreq=[];

// Count frequencies of each element
for (var i = 0; i < arr.length; i++) {
    var r = arr[i];
    if (freq[r] === undefined) {
        freq[r] = 0;
    }
    freq[r]++;
    
    // Track maximum frequency encountered so far
    if (freq[r] > maxFreq) {
        maxFreq = freq[r];
        // Reset the array of most frequent items
        mostFreq = [r];
    } else if (freq[r] === maxFreq) {
        // Add element to the array of most frequent items
        mostFreq.push(r);
    }
}

// Output the most frequent elements
mostFreq.forEach(function(item) {
    console.log(item + " (" + maxFreq + " times)");
});
