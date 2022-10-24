import Head from "next/head";
import Header from "../components/Header";
import CryptoMarketWidget from "../components/CryptoMarketWidget";
import { useEffect, useState } from "react";

export default function Home() {

  const [height,setHeight] = useState(null)
  
  useEffect(()=>{

    if (window.innerWidth < 500) setHeight(300)
    else setHeight(500)

  },[])



  return (
    <>
      <Head></Head>

      <Header />

      {height && <CryptoMarketWidget height={height} />}
    </>
  )
}