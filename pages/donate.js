import Head from "next/head";
import Header from "../components/Header";
export default function Donate() {

    function openWidget() {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    console.log(res);
                })
        }
        else {
            if (confirm('do you want to install metamask extension')) window.location.href = 'https://chrome.google.com/webstore/search/metamask?hl=en-US'
        }
    }

    return (
        <>
            <Head>
                <title>unitytrade+ | donate</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="/donate.png" />
            </Head>

            <Header
                quote="We make a living by what we get, but we make a life by what we give."
                author="Winston Churchill"
            />

<div className="w3-row w3-padding w3-border">
     <div className="w3-col w3-display-container w3-padding">
       <img className="w3-image w3-sepia" src="/donate.gif" alt="DONATE" style={{ width: '100%' }} />
       <div className="w3-display-middle">
         <span className="w3-jumbo w3-hide-small w3-text-dark-grey">
           <b>DONATE</b>
         </span>
         <span className="w3-xlarge w3-hide-large w3-hide-medium w3-text-dark-grey">
           <b>DONATE</b>
         </span>
       </div>
     </div>
     <div className="w3-white w3-margin">
       <div className="w3-container w3-black">
         <h4>DONATE</h4>
       </div>
       <div className="w3-justify w3-padding">
         <p> "Thank you for considering a donation to our organization in the form of cryptocurrency. We are grateful for your support and appreciate the convenience and security of donating through this method. Your donation will go towards [cause/purpose of donation] and will make a significant impact in our efforts to [outcome of donation]. </p>
         <p> To make a donation, please send your contribution to the following address: </p>
         <p>
         <table className="w3-table-all">
           <thead>
             <tr>
               <th>Coin</th>
               <th>Binance Wallet Receive address</th>
               <th>Network</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>Bitcoin</td>
               <td> 0xc1fc0f62f9cd820221ff85a4f62dad4bd9166d93 <br></br> 1D2KEHT9cP9Ekzyn532mTH3jyA2ZPj13Nt </td>
               <td>[BNB Smart Chain(BEP20)] <br></br> [Bitcoin] </td>
             </tr>
             <tr>
               <td>Litecoin</td>
               <td>1D2KEHT9cP9Ekzyn532mTH3jyA2ZPj13Nt</td>
               <td>[BNB Smart Chain(BEP20)]</td>
             </tr>
             <tr>
               <td>Tron</td>
               <td> 0xc1fc0f62f9cd820221ff85a4f62dad4bd9166d93 <br></br> THjMarsDvPvn1FTqbDByPg2uMb5yDZsTod </td>
               <td>[BNB Smart Chain(BEP20)] <br></br> [TRC 20] </td>
             </tr>
             <tr>
               <td> USDT</td>
               <td>TH3vdwLeL4d8r4ogwf6zhZxDLV3WXC9exp</td>
               <td>[TRC 20]</td>
             </tr>
           </tbody>
         </table>
         </p>
         <p>
         <table className="w3-table-all">
           <thead>
             <tr>
               <th>Coin</th>
               <th>Trust Wallet Receive address</th>
               <th>Network</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>Bitcoin</td>
               <td>bc1qn6acmg8upr22n85f8gxdjy47u5v3z9cn7xvlmr</td>
             </tr>
             <tr>
               <td>Litecoin</td>
               <td>ltc1qsrk9zuca58tr328fewqpjsplzxpq2ms4g6edfj</td>
             </tr>
             <tr>
               <td>Tron</td>
               <td>TH3vdwLeL4d8r4ogwf6zhZxDLV3WXC9exp</td>
             </tr>
             <tr>
               <td>USDT</td>
               <td>TH3vdwLeL4d8r4ogwf6zhZxDLV3WXC9exp</td>
               <td>[TRC 20]</td>
             </tr>
           </tbody>
         </table>
         </p>
         <p> "Thank you again for your generosity and kindness." </p>
       </div>
     </div> {/* <div className="w3-white w3-margin">
       <div className="w3-container w3-black">
         <h4>DONATE</h4>
       </div>
       <p className="w3-center w3-padding ">
         <button className="w3-button w3-teal" onClick={openWidget}>CLICK</button>
       </p>
     </div> */} +
   </div>

        </>
    )

}