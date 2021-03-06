const {performance} = require('perf_hooks');

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function countPrimeNumbers(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return(arr.length);
}

var t0 = performance.now();
for (let index = 0; index < 100; index++) {
    countPrimeNumbers(100);
}
var t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`)
