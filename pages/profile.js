
import Head from "next/head"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import Image from "next/image"

export default function Profile() {

    const ROUTER = useRouter()

    const [PROFILE, setPROFILE] = useState(null)

    useEffect(() => {
        const DOMAIN = (process.env.NEXT_PUBLIC_ENVIROMENT === "development") ? "http://localhost:3000" : "https://unitytradeplus.vercel.app"
        const URL = `${DOMAIN}/api/verify`
        fetch(URL)
            .then(async (res) => {
                const data = await res.json()
                if (res.status === 401) throw Error(data['error'])
                setPROFILE(data)
            })
            .catch(err => {
                ROUTER.push("/login")
            })
    }, [])

    return (
        <>
            <Head>
                <title>unitytrade+ | profile</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Header
                quote="The greatest glory in living lies not in never falling, but in rising every time we fall"
                author="Nelson Mandela"
            />

            <div className="w3-row w3-padding w3-border">
                {
                    PROFILE &&
                    <div className="w3-white w3-margin">
                        <p className="w3-justify w3-center">
                            <p>
                                {PROFILE['photo_url'] && <img src={PROFILE['photo_url']} className="w3-image" alt="PROFILE" width="320" height="320" />}
                            </p>
                            <p>
                                Welcome to {PROFILE['first_name']}'s profile page on UnityTradePlus! <br />
                                [He/She] has been a member of our community since {PROFILE['auth_date']}(unix) and goes by the username <span>{PROFILE['username'] ? <>{PROFILE['username']}</> : "Set your telegram's username"}</span>. <br />
                                {PROFILE['first_name']}'s profile picture showcases [his/her] friendly and approachable nature, making [him/her] a great person to connect with on our platform. <br />
                                [His/Her] {PROFILE['last_name']} adds a professional touch to [his/her] profile, making {PROFILE['first_name']} someone you can trust and rely on for helpful and reliable information. <br />
                                Take a look around and get to know {PROFILE['first_name']} better on UnityTradePlus!
                            </p>
                        </p>
                    </div>
                }
            </div>
        </>
    )

}