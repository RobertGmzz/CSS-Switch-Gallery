import { cssFilesRoutes } from "../References"
import { useSetCssStore } from "../State"

function Hero(){
    const currentCss = useSetCssStore((state) => state.currentCss)
        
    return (
        <header className="px-5 xl:w-170">
            <h1>CSS Switch Gallery</h1>
            <h2>A <strong>collection of ready-to-use CSS styles</strong> for any project!</h2>

            <div className="mt-2 mb-2 *:mb-3">
                <p>
                    Navigate through different styles using the <span>arrow buttons</span> above the preview to switch between different style presets and see how your HTML elements will look.
                </p>

                <p>
                    You can also toggle light and dark mode to preview color changes. The styles support <span>prefers-color-scheme</span>, and you can optionally use a <code>.dark</code> class included in the CSS file for manual control.
                </p>

                <p>
                    To use a preset, copy the <code>{'<link/>'}</code> element above the preview and add it to your HTML head, or <a href={cssFilesRoutes[currentCss]} target="_blank" rel="noopener noreferrer">download the file</a> to customize it however you like.
                </p>
            </div>

            <a href="https://github.com/RobertGmzz/CSS-Styles-Gallery/tree/master/proyecto-01" target="_blank" rel="noopener noreferrer" className="button-like inline-flex items-center gap-2 py-1 px-2 w-auto">
                <img src="./github.svg" alt="github icon"/>
                Project
            </a>
        </header>
    )
}

export default Hero