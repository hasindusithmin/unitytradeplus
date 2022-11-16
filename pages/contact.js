
import Head from "next/head";
import Header from "../components/Header";
import Script from "next/script";
export default function Contact() {
  return (
    <>
      <Head>
        <title>unitytrade+ | contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/donate.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
        {/* <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></Script> */}
      </Head>

      <Header />

      <div>
        <div className="back">
          <div className="container">
            <div className="row">
              <div className="col align-self-center"><br></br>
                <h1 className="text-center">Contact Us</h1>
                {/* <!-- contact form --> */}
                <form>
                  {/* <!-- name --> */}
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* <!-- email --> */}
                  <div className="form-group">
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your E-mail"
                    />
                  </div>

                  {/* <!-- subject --> */}
                  <div className="form-group">
                    <label for="subject">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="subject"
                      placeholder="Enter E-mail Subject"
                    />
                  </div>

                  <div className="form-group">
                    <label for="email_body">Message</label>
                    <textarea
                      className="form-control"
                      id="email_body"
                      rows="5"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form><br></br>
                <div className="para"><p1>Knowing the opinion of our customers is very important to us, we extend the invitation to fill out our form
                  to request information about the services we offer.
                  As soon as possible, one of our representatives will attend your request.  </p1></div><br></br>
              </div>
            </div>
          </div>
          <p></p><br></br><br></br><br></br><br></br><br></br>
        </div>

      </div>

    </>
  );
}

