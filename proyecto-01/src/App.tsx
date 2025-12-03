import Home from "./components/Mockup"
import AboutPage from "./components/Header"
import SwitchButtons from "./special/SwitchButtons"

//swtichbuttons recibe el estado y la funcion para actualizarlo y cambia el estado
//otro componente debe poder acceder al estado y mostrarlo sin modificarlo
function App() {

  return (
    <>
    <div className="flex flex-col items-center w-full px-4 pt-5">
      <AboutPage />
      <Home />
      <SwitchButtons />
    </div>
    </>
  )
}

export default App

/* ejemplo de uso de zustand

import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
*/

/* prueba de uso de zustand para este proyecto
//importar create para usar zustand
//crear el store
//dentro del store crear el estado inicial y la funcion que modifica el estado

//el componente que renderiza los botones recibe el estado y la funcion actualizadora y modifica el estado, mediante un useEffect cambia el href del link
//el componente que renderiza el link sera pasado como prop children al componente que muestra los demos


*/