import { useState, useEffect } from "react"

const getSystemTheme = () => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") return true
    if (saved === "light") return false

    return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function ThemeButton(){
    const [isDark, setIsDark] = useState(getSystemTheme)

    useEffect(() => {
        const elem = document.getElementById("dinamic-style") as HTMLElement
        elem.classList.toggle("dark", isDark)

        if(isDark){
            localStorage.theme = "dark"
        } else {
            localStorage.theme = "light"
        }
    }, [isDark])

    return (
        <button onClick={() => setIsDark(!isDark)}>
            {isDark? "Switch to Light mode" : "Switch to Dark mode"}
        </button>
    )
}

export default ThemeButton