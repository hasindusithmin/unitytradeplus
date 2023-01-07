import Head from "next/head";
import Header from "../../components/Header";
import Link from "next/link";

export default function Blog() {

    const streams = [[['bitcoin', 'w3-sand'], ['currencies', 'w3-pale-red']], [['stocks', 'w3-pale-green'], ['crypto', 'w3-pale-yellow']], [['commodities', 'w3-pale-blue'], ['indices', 'w3-light-grey']]]

    return (
        <>
            <Head>
                <title>unitytrade+ | blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="/blog.png" />
            </Head>

            <Header
                quote="The pen is mightier than the sword."
                author="Edward Bulwer-Lytton"
            />

            <div className="w3-row w3-padding w3-border">

                <div className="w3-col w3-display-container w3-padding">
                    <img className="w3-image w3-sepia" src="/book.gif" alt="BOOK" style={{ width: '100%' }} />
                    <div className="w3-display-middle">
                        <span className="w3-jumbo w3-hide-small w3-text-dark-grey"><b>BLOG</b> </span>
                        <span className="w3-xlarge w3-hide-large w3-hide-medium w3-text-dark-grey"><b>BLOG</b> </span>
                    </div>
                </div>

                <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>WELCOME TO THE BLOG</h4>
                        </div>
                        <p className="w3-justify w3-padding">
                            Here, you can stay up-to-date on the latest trading ideas and market analysis for a variety of assets including <b>bitcoin, commodities, cryptocurrencies, indices, and stocks</b>. Our team of experts is dedicated to providing valuable insights and strategies to help you make informed decisions in the fast-paced world of trading. Whether you're a seasoned investor or new to the market, we have something for everyone. Thanks for visiting and happy trading!
                        </p>
                    </div>


                <div className="w3-col l8 s12">

                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>STREAMS</h4>
                        </div>

                        {
                            streams &&
                            streams.map(stream2 => (
                                <div className="w3-row" key={Math.random()}>
                                    {
                                        stream2.map(stream => (
                                            <div className="w3-half" key={stream[0]}>
                                                <Link href={`/blog/${stream[0]}`}>
                                                    <div className="w3-container w3-white">
                                                        <div className={`w3-container w3-display-container w3-section ${stream[1]}`} style={{ height: '200px' }}>
                                                            <span className="w3-display-middle w3-wide">{stream[0].toUpperCase()}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className="w3-col l4">
                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>ADVERTISE</h4>
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

            <div className="w3-row w3-padding-32"></div>
        </>
    )
}