import { cssLinks } from "../References"
import { useSetCssStore } from "../State"

function ShowCurrentLinkElement(){
    const currentCss = useSetCssStore((state) => state.currentCss)

    return (
        <code className="mx-2 py-1 px-2 border-2 border-gray-800 rounded-4xl bg-gray-950 text-amber-400 shadow-[0_4px_6px_rgba(0,0,0,0.5)]">{`<link rel="stylesheet" href=${cssLinks[currentCss]}>`}</code>
    )
}

export default ShowCurrentLinkElement