import Head from "next/head";
import Header from "../components/Header";
import CryptoMarketWidget from "../components/CryptoMarketWidget";
import { useEffect, useState } from "react";
import Tags from "../components/Tags";
import Search from "../components/Search";

export default function Home() {

  const [height, setHeight] = useState(null)

  useEffect(() => {

    if (window.innerWidth < 500) setHeight(300)
    else setHeight(500)

    setTimeout(() => {
      const divs = document.getElementsByTagName('div');
      for (let div of divs) {
        if (div.style.height == '500px') div.style.display = 'none';
      }
    }, 3000)

  }, [])



  return (
    <>
      <Head>
        <title>unitytrade+ | home</title>
      </Head>

      <Header />

      {height && <CryptoMarketWidget height={height} />}

      <div className="w3-row w3-padding w3-border">
        <div className="w3-col l8 s12">

          <div className="w3-display-container w3-margin">
            <img className="w3-image" src="/blockchain.gif" alt="BLOCKCHAIN" style={{ width: '100%' }} />
            <div className="w3-text-white w3-cursive w3-display-middle">
              <span className="w3-xlarge">WELCOME TO THE UNITYTRADE+</span>
              <br />
              <span className="w3-hide-small w3-large">Trading is something that can earn a big income if done successfully. Through this channel, we hope to give you everything you need to be a successful trader, including the technical knowledge.</span>
              <br />
              <span className="w3-xlarge w3-hide-small">we wish you all the best in your endeavors!</span>
            </div>
          </div>

          <div className="w3-container w3-margin">
            <div className="w3-container w3-padding w3-black">
              <h4>TAGS</h4>
            </div>
            <div className="w3-container w3-white">
              <Tags />
            </div>
          </div>

        </div>
        <div className="w3-col l4">

          <div className="w3-white w3-margin">
            <img src="/warning.gif" alt="WARNING" style={{ width: '100%' }} className="w3-grayscale" />
            <div className="w3-container w3-black">
              <h4>WARNING</h4>
              <p><strong>Financial Disclaimer :</strong> UNITYTRADE+ is not a financial advisor and does not provide any financial advices. There is a very high degree of risk involved in trading & Investing, specially in cryptocurrencies. Past results are not indicative of future returns and all individuals affiliated with these trading singals assume no responsibilities for your trading and investment results. The ideas presented in this trading signals are personal opinions and for educational and entertainment purposes only. You (and only you) are responsible for the financial decisions that you make. You must assess the risk of any trade with your broker or bank or exchange and make your own independent decisions regarding any currencies, securities or investments mentioned herein. UNITYTRADE+ assumes no responsibilities for your trading and investment results.</p>
            </div>
          </div>

          <div className="w3-white w3-margin">
            <div className="w3-container w3-black">
              <h4>SEARCH</h4>
            </div>
            <Search />
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
          </div>

        </div>
      </div>
    </>
  )
}