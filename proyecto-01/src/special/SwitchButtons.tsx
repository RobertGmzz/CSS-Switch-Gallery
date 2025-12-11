import { useEffect } from "react"
import { cssLinks } from "../References"
import { useSetCssStore } from "../State"
import ThemeButton from "./ToggleTheme"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

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
        <div className="flex justify-between gap-x-5 *:px-4 *:py-2 text-sm font-semibold text-white *:bg-gray-900 *:rounded-2xl *:border-2 *:border-gray-600 *:hover:scale-105 *:active:scale-100 *:cursor-pointer">
            <button onClick={prevCss}>
                <ArrowBigLeft />
            </button>
            <ThemeButton />
            <button onClick={nextCss}>
                <ArrowBigRight />
            </button>
        </div>
    )
}

export default MagicButtons