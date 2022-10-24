
import icons from "../public/icons.json";

export default function Tags() {

    return (
        <p>
            {
                Object.values(icons).map(icon=><span key={icon} className="w3-tag w3-margin-bottom w3-white"><img src={`/icons/${icon}.svg`} alt={icon} width={32} height={32} title={icon.toUpperCase()} />&nbsp;&nbsp;&nbsp;</span>)
            }
        </p>
    )
    
}