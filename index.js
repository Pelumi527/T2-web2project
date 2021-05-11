

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
.then(
    coinGeckoApi=>{
        coinGeckoApi.json().then(
            readAbleApi=>{
                console.log(readAbleApi)

                 
                if(readAbleApi.length > 0){
                    let temp = "";


                    const formatPercent = number =>
                    `${new Number(number).toFixed(2)}%`;

                    const formatDollar = (number, maximumSignificantDigits) =>
                    new Intl.NumberFormat(
                    'en-US',
                    {
                        style: 'currency',
                        currency: 'usd',
                        maximumSignificantDigits
                    })
                        .format(number);

                    //-----star for loop
                    readAbleApi.map((u) => {

                        temp += "<tr>";
                        temp += "<td>" + u.symbol.toUpperCase()+"</td>"
                        temp += "<td>" + u.name+"</td>"
                        temp += "<td>" + formatDollar(u.current_price, 20)+"</td>"
                        temp += "<td><span>" + formatPercent(u.price_change_percentage_24h)+"</span></td>"
                        temp += "<td>" + formatDollar(u.market_cap, 12)+"</td>"
                        temp += "<td>" + formatPercent(u.market_cap_change_percentage_24h)+"</td>"
                        temp += "<td>" + formatDollar(u.total_volume)+"</td></tr>";

                    })

                    //---close for loop
                    
                    document.getElementById("readAbleApi").innerHTML = temp;

                    
                }
            }
        )
    }
)

const metric = async () =>{
    const global_metric = await fetch("https://api.coingecko.com/api/v3/global");
    const global = await global_metric.json();

    const formatPercent = number =>
        `${new Number(number).toFixed(2)}%`;

        const formatDollar = (number, maximumSignificantDigits) =>
        new Intl.NumberFormat(
        'en-US',
        {
        style: 'currency',
        currency: 'usd',
        maximumSignificantDigits
        })
        .format(number);

   

    const crypto = global["data"].active_cryptocurrencies;
    const market = global["data"].markets;
    const marketChange = formatPercent(global["data"].market_cap_change_percentage_24h_usd);

    document.getElementById("crypto").innerHTML = crypto;
    document.getElementById("market").innerHTML = market;
    document.getElementById("marchange").innerHTML = marketChange;

    
}

metric();
