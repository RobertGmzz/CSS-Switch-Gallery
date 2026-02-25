import ShowCurrentLinkElement from "./ShowLinks"
import MagicButtons from "../special/SwitchButtons"
import Iframe from "../special/ShowIframe"

function ShowGallery(){
    return (
        <section className="flex flex-col items-center gap-y-5 my-2 sm:px-2">
            <MagicButtons />
            <div className="preview flex flex-col gap-y-5 p-3 md:p-5">
                <ShowCurrentLinkElement />
                <Iframe />
            </div>
        </section>
    )
}

export default ShowGallery