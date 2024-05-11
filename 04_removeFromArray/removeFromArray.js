const removeFromArray = function(array, ...elements) {
    // function to remove element from an array and 
    // return the edited array

    for (element of elements) {
        while (true){
            let index = array.indexOf(element);
            if (index===-1) break;
            array.splice(index, 1);
        }
    }

    return array;

    // loop that repeats an element until indexOf -> -1
};



// Do not edit below this line
module.exports = removeFromArray;
