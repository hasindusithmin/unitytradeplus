import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Signal() {

    const router = useRouter()

    const [id, set_id] = useState(null)
    const [first_name, set_first_name] = useState(null)
    const [last_name, set_last_name] = useState(null)

    const [joined, setJoined] = useState(false)


    useEffect(() => {
        fetch('/api/verify')
            .then(async (res) => {
                if (!res.ok) router.replace('/')
                const { id, first_name, last_name } = await res.json()
                set_id(id)
                fetch(`/api/isexists?id=${id}`)
                    .then(async (res) => {

                        const data = await res.json()

                        if (res.ok) setJoined(true)
                        else if (res.status === 400) {
                            const Y = confirm(data['error'])
                            if (Y) router.replace('/')
                        }
                    })
            })
    }, [])


    function joinNow() {
        fetch(`/api/join`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, first_name, last_name })
        })
            .then(async (res) => {

                const data = await res.json()

                if (res.ok) setJoined(true)
                else if (res.status === 400) {
                    const Y = confirm(data['error'])
                    if (Y) router.replace('/')
                }
            })
    }

    return (
        <>
            <Head>
                <title>unitytrade+ | signal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="/signal.png" />
            </Head>

            <Header 
                quote="Join our crypto signal service and never miss a profitable trade again. With our expert analysis and timely alerts, you'll be able to maximize your returns and take your trading to the next level."
                author="admin"
            />

            {
                id && !joined &&
                <div className="w3-row w3-padding">
                    <button className="w3-button w3-blue w3-block" onClick={joinNow}>JOIN NOW</button>
                </div>
            }
            {
                id && joined &&
                <div className="w3-row w3-padding">
                    <button className="w3-button w3-teal w3-block" disabled>JOINED</button>
                </div>
            }
        </>
    )
}