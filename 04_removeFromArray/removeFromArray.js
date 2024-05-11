const removeFromArray = function(array, ...elements) {
    // function to remove element from an array and 
    // return the edited array

    for (element of elements) {
        let index = array.indexOf(element);
        if (index===-1) continue;
        array.splice(index,1); 
    }

    return array;

    // Works only for single parameter
    /*
    while (true) {
        let index = array.indexOf(element);
        if (index === -1) break;
        array.splice(index,1);
    }

    return array;
    */
};

// Do not edit below this line
module.exports = removeFromArray;
