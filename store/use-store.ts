import create from "zustand";
import createThemeSlice, { ThemeSlice } from "./theme";
import createSearchSlice, { SearchSlice } from "./create-search-slice";
import createDatabaseSlice, { DatabaseSlice } from "./create-database-slice";
import createFilterBySlice, { FilterBySlice } from "./create-filter-by-slice";
import createResetFiltersSlice, { ResetFiltersSlice } from "./create-reset-filters-slice";
import createShowMoreSlice, { ShowMoreSlice } from "./create-show-more-slice";
import createOrderSlice, { OrderSlice } from "./create-order-slice";

export type StoreState = OrderSlice & ThemeSlice & SearchSlice & DatabaseSlice & FilterBySlice & ResetFiltersSlice & ShowMoreSlice

const useStore = create<StoreState>((set, get) => ({
    ...createThemeSlice(set, get),
    ...createSearchSlice(set, get),
    ...createDatabaseSlice(set, get),
    ...createFilterBySlice(set, get),
    ...createResetFiltersSlice(set, get),
    ...createShowMoreSlice(set, get),
    ...createOrderSlice(set, get)
}));

export default useStore