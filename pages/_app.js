import '../styles/w3.css'
import '../styles/Oswald.css'
import '../styles/Open-Sans.css'
import '../styles/globals.css'
import "../styles/autocomplete.min.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AuthContextProvider} from "../AuthContext"
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className="w3-content" style={{maxWidth:'1600px'}}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </AuthContextProvider>
  )
}

export default MyApp
