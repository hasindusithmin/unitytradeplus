import LoginWidget from "../components/LoginWidget"
import Head from "next/head"
import Header from "../components/Header"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../AuthContext"
import { useRouter } from "next/router"


export async function getServerSideProps() {
    const DOMAIN = (process.env.NEXT_PUBLIC_ENVIROMENT === "development") ? "http://localhost:3000" : "https://unitytradeplus.vercel.app"
    const URL = `${DOMAIN}/api/verify`
    const RES = await fetch(URL)
    console.log(RES.statusText);
    if (RES.status === 401) return { props: { AUTH: false } }
    return {
        props: { AUTH: true }, // will be passed to the page component as props
    }
}

export default function Login() {

    const ROUTER = useRouter()

    useEffect(() => {
        const DOMAIN = (process.env.NEXT_PUBLIC_ENVIROMENT === "development") ? "http://localhost:3000" : "https://unitytradeplus.vercel.app"
        const URL = `${DOMAIN}/api/verify`
        fetch(URL)
            .then(async (res) => {
                const data = await res.json()
                if (res.status === 401) throw Error(data['error'])
                ROUTER.push("/")
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    return (
        <>
            <Head>
                <title>unitytrade+ | login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Header
                quote="The only true limitation is the one you set for yourself."
                author="Brian Tracy"
            />

            <div className="w3-row w3-padding w3-center">
                <div className="w3-white w3-margin">
                    <div className="w3-container w3-black">
                        <h4>LOGIN VIA TELEGRAM</h4>
                    </div>
                    <p>
                        <LoginWidget />                    
                    </p>
                </div>
            </div>
        </>
    )
}