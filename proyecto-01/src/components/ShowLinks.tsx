import { cssLinks } from "../References"
import { useSetCssStore } from "../State"

function ShowCurrentLinkElement(){
    const currentCss = useSetCssStore((state) => state.currentCss)

    return (
        <pre className="mx-2 py-1 px-2 shadow-[0_4px_6px_rgba(0,0,0,0.5)]">{`<link rel="stylesheet" href=${cssLinks[currentCss]}>`}</pre>
    )
}

export default ShowCurrentLinkElement