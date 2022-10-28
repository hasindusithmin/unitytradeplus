import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Chart from "../../components/Chart";
import Technical from "../../components/Technical";
import Tikcer from "../../components/Ticker";


export default function Crypto() {

    const [symbol, setSymbol] = useState(false)

    useEffect(() => {

        const _ = window.location.pathname.split('/').pop();
        if (!symbol) setSymbol(_);

        setTimeout(() => {
            const divs = document.getElementsByTagName('div');
            for (let div of divs) {
                if (div.style.width === '100%' && div.style.height !== '100%' && div.style.position !== 'relative' && div.style.background !== 'transparent') div.style.display = 'none';
            }
        }, 3000)

    }, [])

    return (
        <>
            <Head>
                {symbol && <title>unitytrade+ | {symbol}usdt</title>}
                <link rel="icon" type="image/svg" href={`/icons/${symbol}.svg`} />
                <script src="https://s3.tradingview.com/tv.js" />
            </Head>
            {symbol && <Header icon={symbol} />}

            {
                symbol
                &&
                <>
                    <div className="w3-row w3-padding w3-border">

                        <div className="w3-col l8 s12">
                            <div className="w3-margin">
                                <Chart symbol={`${symbol.toUpperCase()}USDT`} />
                            </div>
                            <div className="w3-margin">
                                <Technical symbol={`${symbol.toUpperCase()}USDT`} />
                            </div>
                        </div>
                        <div className="w3-col l4">
                            <div className="w3-white w3-margin">
                                <Tikcer symbol={`${symbol.toUpperCase()}USDT`} />
                            </div>
                            <div className="w3-white w3-margin">
                                <div className="w3-container w3-padding w3-black">
                                    <h4>Advertise</h4>
                                </div>
                                <div className="w3-container w3-white">
                                    <div className="w3-container w3-display-container w3-light-grey w3-section" style={{ height: '200px' }}>
                                        <span className="w3-display-middle">Your AD Here</span>
                                    </div>
                                </div>
                                <div className="w3-container w3-white">
                                    <div className="w3-container w3-display-container w3-light-grey w3-section" style={{ height: '200px' }}>
                                        <span className="w3-display-middle">Your AD Here</span>
                                    </div>
                                </div>
                                <div className="w3-container w3-white">
                                    <div className="w3-container w3-display-container w3-light-grey w3-section" style={{ height: '200px' }}>
                                        <span className="w3-display-middle">Your AD Here</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="w3-row w3-padding-32"></div>
                </>
            }

        </>
    )
}