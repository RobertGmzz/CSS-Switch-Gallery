import { cssFilesRoutes } from "../References"
import { useSetCssStore } from "../State"

function Hero(){
    const currentCss = useSetCssStore((state) => state.currentCss)
        
    return (
        <header className="px-5 xl:w-170">
            <h1 className="text-5xl font-extrabold mb-4 text-white">CSS Switch Gallery</h1>
            <h2 className="text-2xl font-semibold my-4 text-white">A <strong className="font-semibold">collection of ready-to-use CSS styles</strong> for any project!</h2>

            <div className="text-lg text-gray-300 *:mb-3">
                <p>
                    Navigate through different styles using the <span className="px-1 font-semibold rounded-sm bg-amber-950/70 text-amber-400">arrow buttons</span> above the preview to switch between different style presets and see how your HTML elements will look.
                </p>

                <p>
                    You can also toggle light and dark mode to preview color changes. The styles support <span className="px-1 font-semibold rounded-sm bg-amber-950/70 text-amber-400">prefers-color-scheme</span>, and you can optionally use a <span className="font-bold">.dark</span> class included in the CSS file for manual control.
                </p>

                <p>
                    To use a preset, copy the <code className="text-sm text-amber-400">{'<link/>'}</code> element above the preview and add it to your HTML head, or <a href={cssFilesRoutes[currentCss]} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">download the file</a> to customize it however you like.
                </p>
            </div>

            <a href="https://github.com/RobertGmzz/CSS-Styles-Gallery/tree/master/proyecto-01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-1 px-2 w-auto bg-gray-900 border-2 text-white rounded-2xl border-gray-800 hover:scale-105 active:scale-100">
                <img src="./github.svg" alt="github icon" />
                <span className="text-sm">Project</span>
            </a>
        </header>
    )
}

export default Hero