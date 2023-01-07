
import { GoPlus } from "react-icons/go";

export default function Header({icon,quote,author}) {

    return (
        <header className="w3-white">
            <div className="w3-container w3-center w3-padding-48 w3-white">
                <h1 className="w3-xxxlarge w3-hide-small"><b>UNITYTRADE</b><GoPlus fontSize={40} className="w3-spin" /></h1>
                <h1 className="w3-xxlarge"><b>UNITYTRADE</b><GoPlus fontSize={30} className="w3-spin" /></h1>
                {!icon && quote && author && <h6>{quote} - <span className="w3-tag w3-round-large w3-light-grey">{author}</span></h6>}
                {icon && <h5>{icon.toUpperCase()}USDT</h5>}
                <div className="w3-center">
                    {icon && <img src={`/icons/${icon}.svg`} alt="ICON" width={48} height={48} />}
                </div>
            </div>
        </header>
    )
}

