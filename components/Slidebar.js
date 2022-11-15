
import { FaHome, FaBlogger,FaSignOutAlt } from "react-icons/fa";
import { MdPolicy, MdContactMail, MdDescription } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs"
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import AuthContext from "../AuthContext";
import { useContext } from "react";
export default function Slidebar() {

    const user = useContext(AuthContext)

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
                    {
                        user &&
                        <span className="w3-bar-item w3-button w3-right">{user['first_name']} {user['last_name']}</span>
                    }
                    <Link href="/"><span className="w3-bar-item w3-button" onClick={w3_close} ><FaHome size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >HOME</span></span></Link>
                    <Link href="/blog"><span className="w3-bar-item w3-button" onClick={w3_close} ><FaBlogger size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >BLOG</span></span></Link>
                    <Link href="/about"><span className="w3-bar-item w3-button" onClick={w3_close} ><MdDescription size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >ABOUT</span></span></Link>
                    <Link href="/contact"><span className="w3-bar-item w3-button" onClick={w3_close} ><MdContactMail size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >CONTACT</span></span></Link>
                    <Link href="/donate"><span className="w3-bar-item w3-button" onClick={w3_close} ><MdPolicy size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >DONATE</span></span></Link>
                    {
                        !user &&
                        <Link href="/login"><span className="w3-bar-item w3-button w3-right" onClick={w3_close} ><BsTelegram size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >LOGIN</span></span></Link>
                    }
                    {
                        user &&
                        <Link href="/api/logout"><span className="w3-bar-item w3-button w3-right"><FaSignOutAlt size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >LOGOUT</span></span></Link>
                    }

                </div>
            </nav>
            <div className="w3-overlay w3-hide-large" onClick={w3_close} style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay"></div>
        </div>
    )

}