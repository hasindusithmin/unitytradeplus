import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";


export default function Crypto() {

    const [symbol,setSymbol] = useState(null);
    const router = useRouter();

    useEffect(()=>{
        const {symbol} = router.query;
        setSymbol(symbol);
    },[])

    return (
        <>
            <Head>
                <title>unitytrade+ | {symbol}usdt</title>
                <link rel="icon" type="image/svg" href={`/icons/${symbol}.svg`} />
            </Head>
            <Header icon={symbol} />
        </>
    )
}