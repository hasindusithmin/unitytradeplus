import Link from "next/link";
import { FaHome, FaBlogger,FaSignOutAlt } from "react-icons/fa";
import { MdPolicy, MdContactMail, MdDescription } from "react-icons/md"
import {ImProfile} from "react-icons/im"
import { BsTelegram } from "react-icons/bs"
import { FaBars } from "react-icons/fa"
import {GiAerialSignal} from "react-icons/gi"
import Slidebar from "./Slidebar";
import AuthContext from "../AuthContext";
import { useContext } from "react";
export default function Navbar() {

    const user = useContext(AuthContext)

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }

    return (
        <>
            <Slidebar />
            <div className="w3-dark-grey w3-row">
                <span className="w3-button w3-hide-large w3-xlarge w3-hover-text-grey" onClick={w3_open}><span className="w3-left"><FaBars style={{ verticalAlign: 'middle' }} /></span></span>
            </div>
            <nav className="w3-bar w3-black w3-hide-small w3-top">
                <Link href="/"><span className="w3-bar-item w3-button"><FaHome size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }}>HOME</span></span></Link>
                <Link href="/blog"><span className="w3-bar-item w3-button"><FaBlogger size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >BLOG</span></span></Link>
                <Link href="/about"><span className="w3-bar-item w3-button"><MdDescription size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >ABOUT</span></span></Link>
                <Link href="/contact"><span className="w3-bar-item w3-button"><MdContactMail size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >CONTACT</span></span></Link>
                <Link href="/donate"><span className="w3-bar-item w3-button"><MdPolicy size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >DONATE</span></span></Link>
                {
                    !user &&
                    <Link href="/login"><span className="w3-bar-item w3-button w3-right"><BsTelegram size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >LOGIN</span></span></Link>
                }
                {
                    user &&
                    <>
                        <Link href="/profile"><span className="w3-bar-item w3-button"><ImProfile size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >PROFILE</span></span></Link>
                        <Link href="/signal"><span className="w3-bar-item w3-button"><GiAerialSignal size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >SIGNAL</span></span></Link>
                        <Link href="/api/logout"><span className="w3-bar-item w3-button w3-right"><FaSignOutAlt size={16} style={{ verticalAlign: 'middle' }} />&nbsp;<span style={{ fontSize: 16, verticalAlign: 'middle' }} >LOGOUT</span></span></Link>
                        <span className="w3-bar-item w3-button w3-right">Current user : {user['first_name']} {user['last_name']}</span>
                    </>
                }
            </nav>
        </>
    )
}