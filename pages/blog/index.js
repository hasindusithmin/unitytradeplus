import Head from "next/head";
import Header from "../../components/Header";


export default function Blog() {

    return (
        <>
            <Head>
                <title>unitytrade+ | blog</title>
            </Head>
            <Header />

            <div className="w3-row w3-padding w3-border">

                <div className="w3-col l8 s12">
                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>Steam</h4>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-sand w3-section" style={{ height: '200px' }}>
                                <span className="w3-display-middle w3-wide">BITCOIN</span>
                            </div>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-pale-red w3-section" style={{ height: '200px' }}>
                                <span className="w3-display-middle w3-wide">COMMODITIES</span>
                            </div>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-pale-green w3-section" style={{ height: '200px' }}>
                                <span className="w3-display-middle w3-wide">CRYPTO</span>
                            </div>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-pale-yellow w3-section" style={{ height: '200px' }}>
                                <span className="w3-display-middle w3-wide">CURRENCIES</span>
                            </div>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-pale-blue w3-section" style={{ height: '200px' }}>
                                <span className="w3-display-middle w3-wide">INDICES</span>
                            </div>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-section" style={{ height: '200px',backgroundColor:'#FAE6FA' }}>
                                <span className="w3-display-middle w3-wide">STOCKS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w3-col l4">
                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>Advertise</h4>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-light-grey w3-section" style={{ height: '200px' }}>
                                <span className="w3-display-middle w3-wide">Your AD Here</span>
                            </div>
                        </div>
                        <div className="w3-container w3-white">
                            <div className="w3-container w3-display-container w3-light-grey w3-section" style={{ height: '200px' }}>
                                <span className="w3-display-middle w3-wide">Your AD Here</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}