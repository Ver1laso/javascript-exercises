const fibonacci = function(fib) {

    fib = parseInt(fib);

    
    if (fib < 0 ) return "OOPS";
    if (fib === 0) return 0;
    if (fib === 1) return 1;

    let n1 = 0, n2 = 1;

    for(let i=2 ; i < fib ; i++){

        let n3 = n2 + n1
        n1 = n2;
        n2 = n3;
    }
    
    return n1 + n2;

};

// Do not edit below this line
module.exports = fibonacci;
