import { useEffect, useState } from "react"
import { cssLinks } from "../components/References"
import ThemeButton from "./ToggleTheme"

function MagicButtons(){
    const [index, setIndex] = useState(0)

    const nextCss = () => {
        setIndex((prev) => (prev + 1) % cssLinks.length)
    }
    const prevCss = () => {
        setIndex((prev) => (prev - 1 + cssLinks.length) % cssLinks.length)
    }
    useEffect(() => {
        let linkElem = document.getElementById('dinamic-style') as HTMLLinkElement || null
        linkElem.href = cssLinks[index]
    }, [index])

    return(
        <div className="z-1 fixed bottom-0 right-0 flex justify-between p-2">
            <button onClick={prevCss} className="switch-buttons">
                {"<"}
            </button>
            <div className="flex flex-col items-center">
                <ThemeButton />
            </div>
            <button onClick={nextCss} className="switch-buttons">
                {">"}
            </button>
        </div>
    )
}

export default MagicButtons