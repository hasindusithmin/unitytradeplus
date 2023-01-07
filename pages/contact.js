
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

export default function Contact() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const sendMessage = () => {
    console.log({
      name, email, subject, body
    });
  }


  return (
    <>
      <Head>
        <title>unitytrade+ | contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/about.png" />
      </Head>

      <Header
        quote="The best way to predict the future is to create it."
        author="Peter Drucker"
      />

      <div className="w3-row w3-padding w3-border">

        <div className="w3-col w3-display-container w3-padding">
          <img className="w3-image w3-sepia" src="/contact.gif" alt="CONTACT" style={{ width: '100%' }} />
          <div className="w3-display-middle">
            <span className="w3-jumbo w3-hide-small w3-text-dark-grey"><b>CONTACT</b> </span>
            <span className="w3-xlarge w3-hide-large w3-hide-medium w3-text-dark-grey"><b>CONTACT</b> </span>
          </div>
        </div>

        <div className="w3-white w3-margin">
          <div className="w3-container w3-black">
            <h4>CONTACT US</h4>
          </div>
          <p className="w3-justify w3-padding">
            If you have any questions, please fill out the form below and click the send button. The administrator will contact you as soon as possible.
          </p>
        </div>

        <div className="w3-white w3-margin">
          <div className="w3-container w3-black">
            <h4>FILL</h4>
          </div>
          <div className="w3-container w3-white w3-padding-large">
            <input type="text" className="w3-input w3-border" placeholder="Enter your name" value={name} onInput={e => setName(e.target.value)} />
            <br />
            <input type="email" className="w3-input w3-border" placeholder="Enter your email" value={email} onInput={e => setEmail(e.target.value)} />
            <br />
            <input type="text" className="w3-input w3-border" placeholder="Subject" value={subject} onInput={e => setSubject(e.target.value)} />
            <br />
            <textarea autoCorrect="off" type="text" className="w3-input w3-border" placeholder="Message" value={body} onInput={e => setBody(e.target.value)} />
            <br />
            <div className="w3-center">
              <button onClick={sendMessage} className="w3-button w3-padding w3-black w3-round-xlarge">SEND</button>
            </div>
          </div>
        </div>


      </div>

    </>
  );
}

