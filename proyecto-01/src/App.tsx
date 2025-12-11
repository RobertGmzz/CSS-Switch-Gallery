import Home from "./components/Home"
import ShowGallery from "./components/Gallery"

function App() {
  return (
    <>
    <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-5 pt-5 xl:h-screen bg-gray-950 border-gray-600">
      <Home />
      <ShowGallery />
    </div>
    </>
  )
}

export default App