import Home from "./components/Home"
import ShowCurrentLinkElement from "./components/ShowLiks"

import SwitchButtons from "./special/SwitchButtons"

function App() {

  return (
    <>
    <div className="flex items-start justify-center gap-5 pt-5 w-full">
      <Home />
      <div className="flex flex-col gap-y-2 pt-2 items-center w-225">
        <SwitchButtons />
        <div className="border">
          <ShowCurrentLinkElement />
          <iframe id="iframeVisor" className="border m-5 h-[80vh] w-200" src="/src/assets/DemoElements.html"></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default App