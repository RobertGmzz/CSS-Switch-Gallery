import { useState, useEffect } from "react"
import ThemeButton from "../special/ToggleTheme"

const hrefs = ['<link id="dinamic-style" rel="stylesheet" href="./src/assets/01-style.css">',
    '<link id="dinamic-style" rel="stylesheet" href="./src/assets/02-style.css">'
]


function AboutPage(){
    const cssLinks = [
    "./src/assets/01-style.css",
    "./src/assets/02-style.css"
    ]

    const [index, setIndex] = useState(0)
    const [ref, setRef] = useState(0)


    const nextCss = () => {
        setIndex((prev) => (prev + 1) % cssLinks.length)
        setRef((prev) => (prev + 1) % hrefs.length)
    }
    const prevCss = () => {
        setIndex((prev) => (prev - 1 + cssLinks.length) % cssLinks.length)
        setRef((prev) => (prev - 1 + cssLinks.length) % hrefs.length)
    }
    useEffect(() => {
        let linkElem = document.getElementById('dinamic-style') as HTMLLinkElement || null
        linkElem.href = cssLinks[index]
    }, [index])

    return (
        <header className="w-full lg:w-200">
            <h1>Style-Sheets Gallery</h1>
            <h2>A few ready-to-use <span>static styles</span></h2>
            <p>A gallery where you can <strong>browse a couple of CSS styles and use them directly. </strong>
            This project is based on <a href="https://watercss.kognise.dev/" target="_blank" rel="noreferrer" >water.css</a> and <a href="https://boltcss.com/" target="_blank" rel="noreferrer">bolt.css</a>. My idea was to propose varied styles that can be expanded over time. It is a completely free and open-source project for you to use however you like.</p>
            <h5>Change the styles using "<span>{"< >"}</span>" buttons, Try out various CSS styles</h5>
            <p>Copy the following link tag and paste it into the head of your main html to start using this style!</p>
            <div className="overflow-auto overflow-y-hidden text-nowrap">
                <code>{hrefs[ref]}</code>
            </div>
            <p>Or <a href="https://github.com/RobertGmzz/css-static-styles/blob/master/css/01-style.css">download this css file</a> to use in your project and edit it as you like.</p>
            <div className="flex flex-col items-center">
                <div>
                    <ThemeButton />
                </div>
            </div>
            <div className="fixed bottom-0 flex justify-between p-2">
                <button onClick={prevCss} className="carousel-buttons">
                    {"<"}
                </button>
                <button onClick={nextCss} className="carousel-buttons">
                    {">"}
                </button>
            </div>
        </header>
    )
}

export default AboutPage