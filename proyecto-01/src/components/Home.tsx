import { cssFilesRoutes } from "../References"
import { useSetCssStore } from "../State"

function Hero(){
    const currentCss = useSetCssStore((state) => state.currentCss)
        
    return (
        <header className="px-3 md:pl-5 md:pr-0 xl:w-170">
            <h1 className="mb-2">CSS Switch Gallery</h1>
            <h2 className="mb-5">A <strong>collection of ready-to-use CSS styles</strong> for any project!</h2>

            <section className="mb-2 *:mb-3">
                <p>
                    Navigate through different styles using the <span>arrow buttons</span> above the preview to switch between different style presets and see how your HTML elements will look.
                </p>
                <p>
                    You can also toggle light and dark mode to preview color changes. The styles support <span>prefers-color-scheme</span>, and you can optionally use a <code className = "py-1 px-2">dark</code> class included in the CSS file for manual control.
                </p>
                <p>
                    There are more classes; learn about them by scrolling through the preview.
                </p>
                <p>
                    To use a preset, copy the <code className = "py-1 px-2">{'<link/>'}</code> element above the preview and add it to your HTML head, or <a href={cssFilesRoutes[currentCss]} target="_blank" rel="noopener noreferrer">download the file</a> to customize it however you like.
                </p>
            </section>

            <a href="https://github.com/RobertGmzz/CSS-Styles-Gallery/tree/master/proyecto-01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-1 px-2 w-auto">
                <img src="./github.svg" alt="github icon"/>Project</a>
        </header>
    )
}

export default Hero