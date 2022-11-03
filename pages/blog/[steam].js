import Head from "next/head";
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import ReactPaginate from 'react-paginate';


function Idea({ currentItems }) {

    return (
        <>
            {
                currentItems &&
                currentItems.map(({ title, description, link, pubDate, image }) => 
                    <div className="w3-container w3-white w3-margin w3-padding-large" key={link}>
                        <div className="w3-center">
                            <h3><Link href={link} target={'_blank'}>{title}</Link></h3>
                            <h5><span className="w3-opacity">{pubDate}</span></h5>
                        </div>
                        <div className="w3-justify">
                            <img src={image} alt="CHART" style={{ width: '100%' }} className="w3-padding-16" />
                            <p>{description}</p>
                            <p className="w3-clear"></p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default function Steam() {

    const router = useRouter()
    const { steam } = router.query;

    const [Steam, setSteam] = useState(null);
    const [Steams, setSteams] = useState(null);
    const [ideas, setIdeas] = useState(null);
    const [error, setError] = useState(null);
    const [wait, setWait] = useState('Loading...');
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setSteam(steam)
        const steams = ['bitcoin', 'commodities', 'crypto', 'currencies', 'indices', 'stocks']
        setSteams(steams.filter(item => item !== steam))
        if (steam !== undefined) {
            fetch(`https://tradingideas.deta.dev/${steam}`)
                .then(res => {
                    if (res.status !== 200) throw Error("This Content Isn't Available Right Now")
                    return res.json()
                })
                .then(data => {
                    setWait(null)
                    setError(null)
                    setIdeas(data)
                })
                .catch(error => {
                    setWait(null)
                    setIdeas(null)
                    setError(error.message)
                })
        }
    }, [router.asPath])

    useEffect(() => {
        if (ideas) {
            const endOffset = itemOffset + 6;
            setCurrentItems(ideas.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(ideas.length / 6));
        }
    }, [itemOffset, 6,ideas]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 6) % ideas.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Head>
                {Steam && <title>blog | {Steam}</title>}
                {Steam && <link rel="icon" type="image/png" sizes="128x128" href={`/blog/${Steam}.png`} />}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Header />

            <div className="w3-row w3-padding w3-border">

                <div className="w3-col l8 s12">
                    {
                        wait &&
                        <div className="w3-container w3-margin w3-padding-large">
                            <div className="w3-center">
                                {wait}
                            </div>
                        </div>
                    }
                    {
                        ideas &&
                        <>
                            <Idea currentItems={currentItems} />
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="&raquo;"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={6}
                                pageCount={pageCount}
                                previousLabel="&laquo;"
                                renderOnZeroPageCount={null}
                                className="w3-bar"
                                pageClassName="w3-button"
                                nextClassName="w3-button"
                                previousClassName="w3-button"
                                activeClassName="w3-button w3-pale-red"
                            />
                        </>
                    }
                    {
                        error && 
                        <div className="w3-container w3-white w3-margin w3-padding-large">
                            <div className="w3-center">
                                <div className="w3-text-red w3-leftbar">{error}</div>
                            </div>
                        </div>
                    }

                </div>

                <div className="w3-col l4">

                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>See others</h4>
                        </div>
                        {
                            Steams &&
                            Steams.map(steam =>
                                <Link href={`/blog/${steam}`} key={steam} >
                                    <div className="w3-container w3-white">
                                        <div className="w3-container w3-display-container w3-light-grey w3-section" style={{ height: '50px' }}>
                                            <span className="w3-display-middle w3-wide">{steam.toUpperCase()}<sup><img src={`/blog/${steam}.png`} alt={steam} width={18} /></sup></span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>

                    <div className="w3-white w3-margin">
                        <div className="w3-container w3-padding w3-black">
                            <h4>Advertise</h4>
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