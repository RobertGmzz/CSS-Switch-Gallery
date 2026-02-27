import { useState, useEffect } from "react"

function ThemeButton(){
    const [isDark, setIsDark] = useState(true)

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
        <button onClick={() => setIsDark(!isDark)}>
            {isDark? "Modo oscuro" : "Modo claro"}
        </button>
    )
}

export default ThemeButton