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
        const html = document.documentElement
        html.classList.toggle("dark", isDark)

        if(isDark){
            localStorage.theme = "dark"
        } else {
            localStorage.theme = "light"
        }
    }, [isDark])

    return (
        <button onClick={() => setIsDark(!isDark)}>
            {isDark? "See Light mode" : "See Dark mode"}
        </button>
    )
}

export default ThemeButton