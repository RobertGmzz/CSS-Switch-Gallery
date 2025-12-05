import { useEffect } from "react"
import { cssLinks } from "../components/References"
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
        <div className="flex justify-between gap-x-5 text-white font-semibold *:border-2 *:border-gray-600 *:rounded-2xl *:px-4 *:py-2">
            <button onClick={prevCss} className="cursor-pointer bg-gray-800">
                <ArrowBigLeft />
            </button>
                <ThemeButton />
            <button onClick={nextCss} className="cursor-pointer bg-gray-800">
                <ArrowBigRight />
            </button>
        </div>
    )
}

export default MagicButtons