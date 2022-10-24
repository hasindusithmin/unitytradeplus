
import { FaFacebookSquare, FaInstagramSquare, FaSnapchatSquare, FaFlickr, FaTwitterSquare, FaLinkedinIn, FaSearch } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
export default function Slidebar() {

    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }

    return (
        <div className="w3-hide-large">
            <nav className="w3-sidebar w3-collapse w3-white" style={{ zIndex: 3, width: '200px', }} id="mySidebar"><br />
                <div className="w3-container">
                    <span onClick={w3_close} className="w3-right w3-hover-grey" title="close menu">
                        <AiFillCloseCircle size={48} color="#FF8484" />
                    </span>
                    <img src="https://via.placeholder.com/300" alt="Profile" style={{ width: '45%' }} className="w3-round" /><br /><br />
                    <h4><b>UNITYTRADE</b><GoPlus size={18} /></h4>
                </div>
                <div className="w3-bar-block">
                    <span className="w3-bar-item w3-button"><FaFacebookSquare /></span>
                    <span className="w3-bar-item w3-button"><FaInstagramSquare /></span>
                    <span className="w3-bar-item w3-button"><FaSnapchatSquare /></span>
                    <span className="w3-bar-item w3-button"><FaFlickr /></span>
                    <span className="w3-bar-item w3-button"><FaTwitterSquare /></span>
                    <span className="w3-bar-item w3-button"><FaLinkedinIn /></span>
                    <span className="w3-bar-item w3-button w3-right"><FaSearch /></span>
                </div>
            </nav>
            <div className="w3-overlay w3-hide-large" onClick={w3_close} style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay"></div>
        </div>
    )

}