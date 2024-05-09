const reverseString = function(string) {
    
    let array = string.split("");
    let arrayReversed = [];
    let index = array.slice(); 
    for (i = 0; i < index.length; i++) {
        arrayReversed.push(array.pop());
    }
    let stringReversed = arrayReversed.join("");
    return stringReversed;
    /*
    // split string into an array
    array = string.split("");
    // create new empty array
    let arrayReversed = [];
    // Pop the last element and push into a new empty array
        // arrayEmpty = array.pop()
    arrayReversed.push(array.pop());
    // repeat/loop until the array has been reversed
    for (i = 0; i < array.length, i++) {
        arrayReversed.push(array.pop()); 
    }
    // convert array into a string
    let stringReversed = arrayReversed.join();
    */
};

// Do not edit below this line
module.exports = reverseString;
