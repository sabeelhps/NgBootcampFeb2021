

// async function add(x,y) {
    
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw "INVALID NUMBER TYPE";
//     }

//     return x + y;
// }

// add('Sabeel', 4)
//     .then(data => {
//         console.log("Inside Resolve")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Inside Reject")
//         console.log("Something Went Wrong");
//         console.log(err);
//     })



async function getBitCoinPrice() {
    console.log("Starting the getBitCoin Function");

    const response=await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    
    console.log("After Getting Response from fetch");

    console.log("Parsing response for Data");
    
    const data = await response.json();
    console.log("Parsing Complete");

    console.log(data.ticker.price);
    console.log("getBitCoinPrice Function completes ,ALL DONE!! ");

}

getBitCoinPrice()
    .then(() => {
        console.log("Resolved");
    })
    .catch(err => {
        console.log("AAAHHHH! ERROR");
        console.log(err);
    })

console.log("AFTER FUNCTION")
console.log("AFTER FUNCTION")
console.log("AFTER FUNCTION")
console.log("AFTER FUNCTION")

