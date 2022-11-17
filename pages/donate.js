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

            <Header />

            <div className="w3-row w3-padding w3-border">
                <div className="w3-white w3-margin">
                    <p className="w3-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="w3-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="w3-white w3-margin">
                    <button onClick={openWidget}>Donate</button>
                </div>


            </div>

        </>
    )

}