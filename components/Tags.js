
import Link from "next/link";
import icons from "../public/icons.json";

export default function Tags() {

    return (
        <p>
            {
                Object.values(icons).map(icon=><Link  key={icon} href={`/crypto/${icon}`} ><span className="w3-tag w3-margin-bottom w3-white"><img src={`/icons/${icon}.svg`} alt={icon} width={32} height={32} title={icon.toUpperCase()} />&nbsp;&nbsp;&nbsp;</span></Link>)
            }
        </p>
    )
    
}