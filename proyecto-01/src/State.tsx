import { cssLinks } from "./components/References"
import { create } from "zustand"

//store de zustand para crear el estado global del index de la css actual
interface State {
    currentCss: number
    nextCss: () => void
    prevCss: () => void
}

export const useSetCssStore = create<State>((set) => ({
    currentCss: 0,
    nextCss: () => set((state: { currentCss: number }) => ({ currentCss: (state.currentCss + 1) %  cssLinks.length })),
    prevCss: () => set((state: { currentCss: number }) => ({ currentCss: (state.currentCss - 1 + cssLinks.length) % cssLinks.length })),
}))