import {FaBars} from "react-icons/fa"
import { GoPlus } from "react-icons/go";
import Slidebar from "./Slidebar";

export default function Header({icon}) {

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }

    return (
        <>
        <Slidebar />
        <header className="w3-white">
            <span><img src="https://via.placeholder.com/300" style={{width:'65px'}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></span>
            <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onClick={w3_open}><FaBars /></span>
            <div className="w3-container w3-center w3-padding-48 w3-white">
                <h1 className="w3-xxxlarge"><b>UNITYTRADE</b><GoPlus fontSize={40} className="w3-spin" /></h1>
                <h6>Bitcoin is a technological tour de force <span className="w3-tag"><i>- bill gates</i></span></h6>
                <div className="w3-center">
                    {icon && <img src={`/icons/${icon}.svg`} alt="1inch" width={48} height={48} />}
                </div>
            </div>
        </header>
        </>
    )
}

