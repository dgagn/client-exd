import create from 'zustand';
import { persist } from 'zustand/middleware';
import createViewSlice, { ViewSlice } from "./create-view-slice";
import createColorSlice, { ColorSlice } from "./create-color-slice";

export type PersistantStoreState = ViewSlice & ColorSlice

const usePersistantStore = create<PersistantStoreState>(persist((set, get) => ({
    ...createViewSlice(set, get),
    ...createColorSlice(set, get)
}), {
    name: 'cefir-persistant'
}));

export default usePersistantStore;