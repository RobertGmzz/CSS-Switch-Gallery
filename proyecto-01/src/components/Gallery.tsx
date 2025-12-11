import ShowCurrentLinkElement from "./ShowLiks"
import MagicButtons from "../special/SwitchButtons"
import Iframe from "../special/ShowIframe"

function ShowGallery(){
    return (
        <div className="flex flex-col items-center gap-y-5 py-2 px-2">
            <MagicButtons />
            <div className="flex flex-col gap-y-5 p-1 sm:p-5 sm:bg-gray-900 sm:border-2 rounded-4xl border-gray-800">
                <ShowCurrentLinkElement />
                <Iframe />
            </div>
        </div>
    )
}

export default ShowGallery