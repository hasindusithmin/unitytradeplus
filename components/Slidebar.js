
import { FaHome, FaBlogger } from "react-icons/fa";
import { MdPolicy, MdContactMail, MdDescription } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai";
import {GiAerialSignal} from "react-icons/gi"
import { GoPlus } from "react-icons/go";
import Link from "next/link";
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
                    <h4><b>UNITYTRADE</b><GoPlus size={18} /></h4>
                </div>
                <div className="w3-bar-block">
                    <Link href="/"><span className="w3-bar-item w3-button"><FaHome size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >HOME</span></span></Link>
                    <Link href="/about"><span className="w3-bar-item w3-button"><MdDescription size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >ABOUT</span></span></Link>
                    <Link href="/contact"><span className="w3-bar-item w3-button"><MdContactMail size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >CONTACT</span></span></Link>
                    <Link href="/blog"><span className="w3-bar-item w3-button"><FaBlogger size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >BLOG</span></span></Link>
                    <Link href="/policy"><span className="w3-bar-item w3-button"><MdPolicy size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >POLICY</span></span></Link>
                    <Link href="/signal"><span className="w3-bar-item w3-button w3-right"><GiAerialSignal size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >SIGNAL</span></span></Link>
                </div>
            </nav>
            <div className="w3-overlay w3-hide-large" onClick={w3_close} style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay"></div>
        </div>
    )

}