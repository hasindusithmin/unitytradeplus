
import Script from "next/script";

export default function Economic({ height }) {

    return <>

        <div id="economic-calendar-widget" style={{ width: "100%", height: "100%" }}>
            <Script
                id="economic-calendar-script"
                src="https://s3.tradingview.com/external-embedding/embed-widget-events.js"
                onLoad={() => {
                    document.getElementById('economic-calendar-widget').appendChild(document.getElementById('economic-calendar-script'));
                }}>
                {JSON.stringify({
                    "width": '100%',
                    "height": height,
                    "colorTheme": "light",
                    "isTransparent": false,
                    "locale": "en",
                    "importanceFilter": "0,1",
                })}
            </Script>
        </div>

    </>
}