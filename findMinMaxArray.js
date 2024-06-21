function findMaxMin(myArray) {
    let maximum = myArray[0];
    let minimum = myArray[0];
    for (let num of myArray) {
        if (num > maximum) {
            maximum = num;
        } else if (num < minimum) {
            minimum = num;
        }
    }
    return [maximum, minimum];
}