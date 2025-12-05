import { useEffect } from "react"
import { cssLinks } from "../components/References"
import { useSetCssStore } from "../State"
import ThemeButton from "./ToggleTheme"

function MagicButtons(){
    const nextCss = useSetCssStore((state) => state.nextCss)
    const prevCss = useSetCssStore((state) => state.prevCss)
    const currentCss = useSetCssStore((state) => state.currentCss)

    useEffect(() => {
        const iframe = document.getElementById("iframeVisor") as HTMLIFrameElement
        if (!iframe) return

        const updateCss = () => {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            if (!iframeDoc) return

            const linkFromIframe = iframeDoc.getElementById("demo-style") as HTMLLinkElement
            if (!linkFromIframe) return

            linkFromIframe.href = cssLinks[currentCss]
        }

        if (iframe.contentDocument?.readyState === "complete") {
            updateCss()
        }

        iframe.addEventListener("load", updateCss)

        return () => iframe.removeEventListener("load", updateCss)

    }, [currentCss])

    return(
        <div className="flex justify-between">
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