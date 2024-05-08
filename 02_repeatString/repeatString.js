const repeatString = function(string, num) {

    let result = '';
    if (num < 0){
       result = "ERROR"
    }

    for (i=0; i<num; i++){
        result = result + string;
    }

    return result;
    // create a loop that runs num times
    // create a new string
    // concatenate the string
};

// Do not edit below this line
module.exports = repeatString;
