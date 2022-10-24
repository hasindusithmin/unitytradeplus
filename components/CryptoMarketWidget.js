import Script from "next/script";

export default function CryptoMarketWidget({ height }) {

    return <>

        <div id="crypto-market-widget" style={{ width: "100%", height: "100%" }}>
            <Script
                id="crypto-market-script"
                src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
                onLoad={() => {
                    document.getElementById('crypto-market-widget').appendChild(document.getElementById('crypto-market-script'));
                }}>
                {JSON.stringify({
                    "width": '100%',
                    "height": height,
                    "defaultColumn": "overview",
                    "screener_type": "crypto_mkt",
                    "displayCurrency": "USD",
                    "colorTheme": "light",
                    "locale": "en",
                })}
            </Script>
        </div>

    </>
}