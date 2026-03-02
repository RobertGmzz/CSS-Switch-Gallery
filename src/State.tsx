import { cssLinks } from "./References"
import { create } from "zustand"

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