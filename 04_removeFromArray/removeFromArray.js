const removeFromArray = function(array, elements) {
    // function to remove element from an array and 
    // return the edited array

    while true {
        let index = array.indexOf(elements);
        array.splice(index,1);
        return array;
    }

    /*
    // while loop
    while true {

    }
    // indexOf to find specified element
    let index = array.indexOf(elements);    
    // remove element each iteration
    array.splice(index, 1);
    // when indexOf returns undefined -> break
    // return edited array
    return array;
    */
};

// Do not edit below this line
module.exports = removeFromArray;
