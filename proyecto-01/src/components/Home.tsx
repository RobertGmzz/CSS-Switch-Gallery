import { cssFilesRoutes } from "../References"
import { useSetCssStore } from "../State"

function Hero(){
    const currentCss = useSetCssStore((state) => state.currentCss)
        
    return (
        <header className="px-3 md:pl-5 md:pr-0 xl:w-170">
            <h1 className="mb-2">CSS Switch Gallery</h1>
            <h2 className="mb-5">Una <strong>colección de estilos CSS listos para usar</strong> en cualquier proyecto!</h2>

            <div className="mb-2 *:mb-3">
                <p>
                    Navega entre diferentes estilos usando los <code className="py-1 px-2">botones switch</code> sobre el visualizador de elementos html. En el verás como lucirán en tu propia web!
                </p>
                <p>
                    También puedes alternar entre <span>modo oscuro y claro</span>. Las plantillas incluyen algunas clases para uso rápido y manual.
                </p>
                <p>
                    Sabrás sobre las clases scrolleando en el visualizador.
                </p>
                <p>
                    Para aplicar el css en tu proyecto, copia el elemento <code className="py-1 px-2">{'<link/>'}</code> sobre el visualizador y pégalo en el <code className="py-1 px-2">{'<head/>'}</code> de tu html mediante le etiqueta link.
                </p>
                <p>
                    También puedes <a href={cssFilesRoutes[currentCss]} target="_blank" rel="noopener noreferrer">descargar la plantilla</a> y editarla manualmente.
                </p>
            </div>

            <a href="https://github.com/RobertGmzz/CSS-Styles-Gallery/tree/master/proyecto-01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-1 px-2 w-auto">
                <img src="./github.svg" alt="github icon"/>project</a>
        </header>
    )
}

export default Hero