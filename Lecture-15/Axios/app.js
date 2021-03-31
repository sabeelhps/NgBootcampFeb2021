

axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(fetchedData => {
        console.log(fetchedData.data.ticker.price);
    })
    .catch(err => {
        console.log(err);
    })