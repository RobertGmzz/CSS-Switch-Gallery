import { useEffect } from "react"
import { cssLinks } from "../components/References"
import ThemeButton from "./ToggleTheme"
import { useSetCssStore } from "../State"

function MagicButtons(){
    const nextCss = useSetCssStore((state) => state.nextCss)
    const prevCss = useSetCssStore((state) => state.prevCss)
    const currentCss = useSetCssStore((state) => state.currentCss)

    useEffect(() => {
        let linkElem = document.getElementById('dinamic-style') as HTMLLinkElement || null
        linkElem.href = cssLinks[currentCss]
    }, [currentCss])

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