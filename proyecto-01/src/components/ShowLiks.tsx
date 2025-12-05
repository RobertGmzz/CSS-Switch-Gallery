import { cssLinks } from "./References"
import { useSetCssStore } from "../State"

function ShowCurrentLinkElement(){
    const currentCss = useSetCssStore((state) => state.currentCss)

    return (
        <code>{`<link rel="stylesheet" href=${cssLinks[currentCss]}>`}</code>
    )
}

export default ShowCurrentLinkElement