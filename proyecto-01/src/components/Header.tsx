import { cssLinks } from "./References"
import { useSetCssStore } from "../State"

function AboutPage(){
    const currentCss = useSetCssStore((state) => state.currentCss)

    return (
        <header className="w-full lg:w-200">
            <h1>Static-Styles Gallery</h1>
            <h3>A collection of ready-to-use CSS styles for any project!</h3>

            <div>
                <p>Copy the link below and paste it into your HTML to instantly apply this style to your page.</p>
                <div className="overflow-auto overflow-y-hidden whitespace-nowrap py-2">
                    <code>{`<link id="dinamic-style" rel="stylesheet" href=${cssLinks[currentCss]}>`}</code>
                </div>
            </div>

            <p>Use the <span>switch buttons</span> to find between different styles the one that best matches your vision. You can also switch between light and dark mode using the toggle button.</p>
            
            <p>...or <a href="https://github.com/RobertGmzz/css-static-styles/blob/master/css/01-style.css" target="_blank" rel="noreferrer">download this css file</a> to use in your project and edit it as you like.</p>
        </header>
    )
}

export default AboutPage