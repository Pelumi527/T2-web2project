

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


                        const trow = document.createElement("tr");

                        const tdata = document.createElement("td");
                        const tdata1 = document.createElement("td");
                        const tdata2 = document.createElement("td");
                        const tdata3 = document.createElement("td");
                        const tdata4 = document.createElement("td");
                        const tdata5 = document.createElement("td");
                        const tdata6 = document.createElement("td");
                        const tdata7 = document.createElement("td");
                        const tdata8 = document.createElement("td");

                        const imgsrc = u.image
                        const imgtag = document.createElement("img");
                        imgtag.src = imgsrc
                        const symbol = u.symbol.toUpperCase()
                        const name  = u.name
                        const price = formatDollar(u.current_price, 20)
                        const priceChange = formatPercent(u.price_change_percentage_24h)
                        const marketCap = formatDollar(u.market_cap, 12)
                        const marketCapChange = formatPercent(u.market_cap_change_percentage_24h)
                        const volume = formatDollar(u.total_volume)

                        trow.append(tdata)
                        trow.append(tdata1)
                        trow.append(tdata2)
                        trow.append(tdata3)
                        trow.append(tdata4)
                        trow.append(tdata5)
                        trow.append(tdata6)
                        trow.append(tdata7)
                        trow.append(tdata8)

                        tdata.append(imgtag)
                        tdata1.append(symbol)
                        tdata2.append(name)
                        tdata3.append(price)
                        tdata4.append(priceChange)
                        tdata5.append(marketCap)
                        tdata6.append(marketCapChange)
                        tdata7.append(volume)
                       
                        

                        document.getElementById("row").appendChild(trow)
                        
                        


                        
                        
                    })

                    //---close for loop

                    
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
