function findLongestString(stringArray) {
    let longestString = "";
    for (let str of stringArray) {
        if (str.length > longestString.length) {
            longestString = str;
        }
    }
    return longestString;
}