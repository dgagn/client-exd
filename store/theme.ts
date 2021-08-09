import { GetState, SetState } from "zustand";
import { StoreState } from "./use-store";

export interface ThemeSlice {
    isDark: boolean
    toggleDarkMode: () => void
}

const createThemeSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
    isDark: false,
    toggleDarkMode: () => {
        set({ isDark: !get().isDark })
    }
});

export default createThemeSlice