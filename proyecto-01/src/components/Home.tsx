import { cssFilesRoutes } from "./References"
import { useSetCssStore } from "../State"

function Hero(){
    const currentCss = useSetCssStore((state) => state.currentCss)
        

    return (
        <header className="px-5 xl:w-170">
            <h1 className="text-5xl font-extrabold mb-4 text-white">CSS Styles Gallery</h1>
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

                <a href="https://github.com/RobertGmzz/CSS-Styles-Gallery/tree/master/proyecto-01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-1 px-2 w-auto bg-gray-900 border-2 rounded-2xl border-gray-600 hover:scale-105 active:scale-100">
                    <img src="./github.svg" alt="github icon" />
                    <span className="text-sm">Project</span>
                </a>
            </div>
        </header>
    )
}

export default Hero

/*
Navega entre distintos estilos usando los botones flecha por encima del visualizador para ver como luciran tus elementos html, me asegure de cubrir una cantidad importante de ellos.

Tambien puedes previsualizar como cambian los colores segun claro y oscuro con el boton toggle, los estilos tienen en cuenta el (prefers-color-scheme), aunque tambien hay una clase "dark" en el estilo css para que puedas hacer uso de ella libremente.

Finalmente, copia el elemento link encima del visualizador y pegalo en el head de tu index html para usar directamente el estilo que vez. O puedes descargarlo aqui y para usar en tu proyecto y editarlo como quieras.
*/