const palindromes = function (str) {
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var splitString = cleanedStr.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    if(cleanedStr === joinArray){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
