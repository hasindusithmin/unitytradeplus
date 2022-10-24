import icons from "../public/icons.json";
import autoComplete from "@tarekraafat/autocomplete.js"
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Search() {

    const router = useRouter()

    const searchCrypto = () => {
        
    }

    useEffect(() => {
        const autoCompleteJS = new autoComplete({
            selector: "#crypto",
            placeHolder: "Search for symbol (crypto) ...",
            data: {
                src: Object.keys(icons),
                cache: true,
            },
            resultsList: {
                element: (list, data) => {
                    if (!data.results.length) {
                        // Create "No Results" message element
                        const message = document.createElement("div");
                        // Add class to the created element
                        message.setAttribute("class", "no_result");
                        // Add message text content
                        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                        // Append message element to the results list
                        list.prepend(message);
                    }
                },
                noResults: true,
            },
            resultItem: {
                highlight: true
            },
            events: {
                input: {
                    selection: (event) => {
                        const selection = event.detail.selection.value;
                        autoCompleteJS.input.value = selection;
                    }
                }
            }
        });
    }, [])


    return (
        <>
            <p className="w3-center">
                <input  id="crypto" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoCapitalize="off" maxLength="2048" tabIndex="1" />
            </p>
            <p className='w3-center w3-padding'>
                <button type="button" className="w3-button w3-light-grey" onClick={searchCrypto}>CLICK</button>
            </p>
        </>
    )
}