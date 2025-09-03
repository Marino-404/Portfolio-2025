import { create } from "zustand";

export const useAppState = create((set) => ({
  // valores iniciales
  theme: true, // true = dark, false = light
  lang: true, // true = es, false = en

  // acciones
  toggleTheme: () => set((state) => ({ theme: !state.theme })),
  toggleLang: () => set((state) => ({ lang: !state.lang })),
  setTheme: (value) => set({ theme: value }),
  setLang: (value) => set({ lang: value }),
}));
