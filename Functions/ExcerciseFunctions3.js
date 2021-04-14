// 1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertStringToPosition(string, insertion, position) {
    var result = [];
    position = position || 1;
    if (position === 1) {
        return insertion + string;
    }
    for (i = 0; i < string.length; i++) {
        if (i === position) {
            result += insertion;
        } result += string[i];
    } return result;
}
console.log(insertStringToPosition("My random string", "JS "));
console.log(insertStringToPosition("My random string", "JS ", 10));