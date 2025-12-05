import { cssLinks } from "./References"
import { useSetCssStore } from "../State"

function ShowCurrentLinkElement(){
    const currentCss = useSetCssStore((state) => state.currentCss)

    return (
        <code className="mx-2 py-1 px-2 border-2 border-gray-600 rounded-4xl bg-gray-950 text-white">{`<link rel="stylesheet" href=${cssLinks[currentCss]}>`}</code>
    )
}

export default ShowCurrentLinkElement