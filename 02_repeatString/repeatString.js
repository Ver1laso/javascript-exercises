const repeatString = function(str, num) {
    if(num < 0) return "ERROR";
    // return str.repeat(num);
    let string = "";
    for (let i = 0; i < num; i++) {
        string += str;
      }
      return string;
};

// Do not edit below this line
module.exports = repeatString;
