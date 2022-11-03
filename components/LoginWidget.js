import Script from "next/script";

export default function LoginWidget() {
    const wrapperStyle = {
        width: "50%",
        height: "50%"
    }
    return <>
        <div id="wrapper" style={wrapperStyle}>
            <Script
                id="widget"
                src="https://telegram.org/js/telegram-widget.js?21"
                data-telegram-login="codeunitybot"
                data-size="large"
                data-auth-url="https://unitytradeplus.vercel.app/api/login" 
                data-request-access="write"
                onLoad={() => {
                    document.getElementById('wrapper').appendChild(document.getElementById('widget'));
                }}>
            </Script>
        </div>
    </>
}