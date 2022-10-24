import Script from "next/script";

export default function Tikcer({ symbol }) {

    return <>

        <div id="ticker-widget" style={{ width: "100%", height: "100%" }}>
            <Script
                id="ticker-script"
                src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
                onLoad={() => {
                    document.getElementById('ticker-widget').appendChild(document.getElementById('ticker-script'));
                }}>
                {JSON.stringify({
                    "symbol": `BINANCE:${symbol}`,
                    "width": "100%",
                    "colorTheme": "light",
                    "isTransparent": true,
                    "locale": "en"
                })}
            </Script>
        </div>

    </>
}