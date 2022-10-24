import { FaFacebookSquare, FaInstagramSquare, FaSnapchatSquare, FaFlickr, FaTwitterSquare, FaLinkedinIn, FaSearch, FaRemoveFormat } from "react-icons/fa";
export default function Navbar() {

    return (
        <nav className="w3-bar w3-black w3-hide-small w3-top">
            <span className="w3-bar-item w3-button"><FaFacebookSquare /></span>
            <span className="w3-bar-item w3-button"><FaInstagramSquare /></span>
            <span className="w3-bar-item w3-button"><FaSnapchatSquare /></span>
            <span className="w3-bar-item w3-button"><FaFlickr /></span>
            <span className="w3-bar-item w3-button"><FaTwitterSquare /></span>
            <span className="w3-bar-item w3-button"><FaLinkedinIn /></span>
            <span className="w3-bar-item w3-button w3-right"><FaSearch /></span>
        </nav>
    )
}