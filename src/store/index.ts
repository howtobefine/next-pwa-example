import { create } from "zustand"

interface State {
  language: Language
  changeLanguage: (language: Language) => void
}

const useStore = create<State>(set => ({
  language: "zh-TW",
  changeLanguage: (language: Language) => set({ language }),
}))

export default useStore
