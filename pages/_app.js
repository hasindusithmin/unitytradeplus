import '../styles/w3.css'
import '../styles/Oswald.css'
import '../styles/Open-Sans.css'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="w3-content" style={{maxWidth:'1600px'}}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
