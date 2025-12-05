import { useState, useEffect } from "react"

function ThemeButton(){
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const iframe = document.getElementById("iframeVisor") as HTMLIFrameElement
            if (!iframe) return

        const setIsDarkInIframe = () => {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
                if (!iframeDoc) return

            const linkFromIframe = iframeDoc.getElementById("theme") as HTMLLinkElement
                if (!linkFromIframe) return

            linkFromIframe.classList.toggle("dark", isDark)
        }

        if (iframe.contentDocument?.readyState === "complete") {
            setIsDarkInIframe()
        }
        
        iframe.addEventListener("load", setIsDarkInIframe)

        return () => iframe.removeEventListener("load", setIsDarkInIframe)

    }, [isDark])

    return (
        <button onClick={() => setIsDark(!isDark)} className="cursor-pointer bg-gray-800">
            {isDark? "See in Light mode" : "See in Dark mode"}
        </button>
    )
}

export default ThemeButton