import Home from "./components/Home"
import ShowCurrentLinkElement from "./components/ShowLiks"
import SwitchButtons from "./special/SwitchButtons"

function App() {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 pt-5 h-screen w-full bg-gray-950 border-gray-600">
      <Home />

      <div className="flex flex-col gap-y-5 pt-2 items-center w-200 lg:w-225">
        <SwitchButtons />
        <div className="flex flex-col gap-y-5 p-5 bg-gray-800 border-2 rounded-4xl border-gray-600">
          <ShowCurrentLinkElement />
          <iframe id="iframeVisor" className="border-2 border-gray-600 rounded-2xl h-[70vh] w-[90vw] lg:w-210" src="/src/assets/DemoElements.html"></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default App