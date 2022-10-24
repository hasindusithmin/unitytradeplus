
import { GoPlus } from "react-icons/go";

export default function Header({icon}) {

    return (
        <header className="w3-white">
            <div className="w3-container w3-center w3-padding-48 w3-white">
                <h1 className="w3-xxxlarge"><b>UNITYTRADE</b><GoPlus fontSize={40} className="w3-spin" /></h1>
                {!icon && <h6>Bitcoin is a technological tour de force <span className="w3-tag"><i>- bill gates</i></span></h6>}
                {icon && <h5>{icon.toUpperCase()}USDT</h5>}
                <div className="w3-center">
                    {icon && <img src={`/icons/${icon}.svg`} alt="ICON" width={48} height={48} />}
                </div>
            </div>
        </header>
    )
}

