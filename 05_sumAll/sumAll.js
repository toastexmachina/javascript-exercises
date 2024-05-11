const sumAll = function(num1, num2) {
    if (num1 < 0 || typeof num1 !== "number"){
        return "ERROR";
    }

    if (num2 < 0 || typeof num2 !== "number"){
        return "ERROR";
    }

    let numberStart;
    let numberEnd;
    if (num1 < num2) {
        numberStart = num1;
        numberEnd = num2;
    } else {
        numberStart = num2; 
        numberEnd = num1; 
    }

    let sum = numberStart; 
    for (i = numberStart+1; i<= numberEnd; i++) {
        sum += i; 
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
