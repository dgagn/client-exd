import create from "zustand";
import createFilterSlice, { FilterSlice } from "./filter-slice";
import createThemeSlice, { ThemeSlice } from "./theme";

export type StoreState = FilterSlice & ThemeSlice

const useStore = create<StoreState>((set, get) => ({
    ...createFilterSlice(set, get),
    ...createThemeSlice(set, get)
}));

export default useStore