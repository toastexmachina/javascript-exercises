const sumAll = function(num1, num2) {
    let sum = num1;
    for (i = num1+1; i<= num2; i++) {
        sum += i; 
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
