import { GetState, SetState } from "zustand";
import { StoreState } from "./use-store";
import { PersistantStoreState } from "./use-persistant-store";

export interface ThemeSlice {
    isDark: boolean
    toggleDarkMode: () => void
}

const createThemeSlice = (set: SetState<PersistantStoreState>, get: GetState<PersistantStoreState>) => ({
    isDark: false,
    toggleDarkMode: () => {
        set({ isDark: !get().isDark })
    }
});

export default createThemeSlice