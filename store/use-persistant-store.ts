import create from 'zustand';
import { persist } from 'zustand/middleware';
import createViewSlice, { ViewSlice } from "./create-view-slice";

export type PersistantStoreState = ViewSlice

const usePersistantStore = create<PersistantStoreState>(persist((set, get) => ({
    ...createViewSlice(set, get)
}), {
    name: 'cefir-persistant'
}));

export default usePersistantStore;