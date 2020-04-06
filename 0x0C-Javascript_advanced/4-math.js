function divideBy(firstNumber) {
    return((()=>{
        return(firstNumber/this.secondNumber)
    }).call())
}

function addBy(firstNumber) {
    return((()=>{
        return(this.secondNumber+firstNumber)
    }).call())
}

var addBy100 = addBy.bind({secondNumber:100});
var addBy1000 = addBy.bind({secondNumber:1000});
var divideBy10 = divideBy.bind({secondNumber:10});
var divideBy100 = divideBy.bind({secondNumber:100});


console.log(addBy100(20))
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
