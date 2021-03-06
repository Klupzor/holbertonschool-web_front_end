var stock = {
    macbook: 2,
    iphone: 4
}

function processPayment(itemName) {
    stock[itemName] = stock[itemName] - 1;
    console.log(`Payment is being processed for item ${itemName}`)
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`)
    console.log("Payment is not being processed")
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`)
    if (itemName in stock) {
        if (stock[itemName] > 0) {
            callbackPayment(itemName)
        } else {
            callbackError(itemName);
        }
    } else {
        console.log(`The item ${itemName} does not exist`)
    }
}

var line = window.prompt("Please enter the item you would like to purchase (Macbook, iPhone)")
  
processOrder(line.toLowerCase(), processPayment, processError)
