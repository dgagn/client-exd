import create from "zustand";
import createFilterSlice, { FilterSlice } from "./filter-slice";

export type StoreState = FilterSlice

const useStore = create<StoreState>((set, get) => ({
    ...createFilterSlice(set, get)
}));

export default useStore