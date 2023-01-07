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
                        <span className="w3-jumbo w3-hide-small w3-text-dark-grey"><b>DONATE</b> </span>
                        <span className="w3-xlarge w3-hide-large w3-hide-medium w3-text-dark-grey"><b>DONATE</b> </span>
                    </div>
                </div>

                <div className="w3-white w3-margin">
                    <div className="w3-container w3-black">
                        <h4>LOREM</h4>
                    </div>
                    <p >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
                <div className="w3-white w3-margin">
                    <div className="w3-container w3-black">
                        <h4>DONATE</h4>
                    </div>
                    <p className="w3-center w3-padding ">
                        <button className="w3-button w3-teal" onClick={openWidget}>CLICK</button>
                    </p>
                </div>


            </div>

        </>
    )

}