const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
/*
    let numberStart;
    let numberEnd;
    if (num1 < num2) {
        numberStart = num1;
        numberEnd = num2;
    } else {
        numberStart = num2; 
        numberEnd = num1; 
    }
*/
    if (num1 > num2) [num1, num2] = [num2, num1];
    // array destructuring method

    let sum = 0; 
    for (i = num1; i<= num2; i++) {
        sum += i; 
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
