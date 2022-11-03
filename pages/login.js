import LoginWidget from "../components/LoginWidget"
import Head from "next/head"
import Header from "../components/Header"
export default function Login() {

    return (
        <>
            <Head>
                <title>unitytrade+ | login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <div className="w3-row w3-padding w3-center">
                <LoginWidget />
            </div>
        </>
    )
}