import Script from "next/script";


export default function Chart({ symbol }) {

    const opt = JSON.stringify({
        "width": '100%',
        "height": 500,
        "symbol": `BINANCE:${symbol}`,
        "interval": "D",
        "timezone": "Asia/Kolkata",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "withdateranges": true,
        "save_image": false,
        "container_id": "crypto-chart"
      })
        

    return <>

        <div id="crypto-chart" style={{ width: "100%", height: "100%" }}>
            <Script
                id="crypto-chart-script"
                onLoad={() => {
                    document.getElementById('crypto-chart').appendChild(document.getElementById('crypto-chart-script'));
                }}>
                {`new TradingView.widget(${opt})`}
            </Script>
        </div>

    </>
}