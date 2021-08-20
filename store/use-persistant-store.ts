import create from 'zustand';
import { persist } from 'zustand/middleware';
import createViewSlice, { ViewSlice } from "./create-view-slice";
import createColorSlice, { ColorSlice } from "./create-color-slice";
import createBookmarkSlice, { BookmarkSlice } from "./create-bookmark-slice";
import createThemeSlice, { ThemeSlice } from "./create-theme-slice";
import createListeSlice, { ListeSlice } from "./create-liste-slice";

export type PersistantStoreState = ViewSlice & ColorSlice & BookmarkSlice & ThemeSlice & ListeSlice

const usePersistantStore = create<PersistantStoreState>(persist((set, get) => ({
    ...createViewSlice(set, get),
    ...createColorSlice(set, get),
    ...createBookmarkSlice(set, get),
    ...createThemeSlice(set, get),
    ...createListeSlice(set, get)
}), {
    name: 'cefir-persistant'
}));

export default usePersistantStore;