import Script from "next/script";

export default function CryptoMarketWidget({ symbol }) {

    return <>

        <div id="ta-widget" style={{ width: "100%", height: "100%" }}>
            <Script
                id="ta-script"
                src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
                onLoad={() => {
                    document.getElementById('ta-widget').appendChild(document.getElementById('ta-script'));
                }}>
                {JSON.stringify({
                    "interval": "1m",
                    "width": "100%",
                    "isTransparent": false,
                    "height": 465,
                    "symbol": `BINANCE:${symbol}`,
                    "locale": "en",
                    "colorTheme": "light"
                })}
            </Script>
        </div>

    </>
}