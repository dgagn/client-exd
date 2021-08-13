import useStore, { StoreState } from '../store/use-store';
import { useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import shallow from 'zustand/shallow';

const useGroups = ({ groupsFilterSearch, filterSubDatabase }: StoreState) => ({
    groupsFilterSearch,
    filterSubDatabase,
});
export default function useGroupsFilter() {
    const { filterSubDatabase, groupsFilterSearch } = useStore(useGroups, shallow);

    const debouncedRendering = useCallback(() =>
        filterSubDatabase(),
        [filterSubDatabase, groupsFilterSearch]
    );

    useEffect(() => {
        debouncedRendering();
    }, [debouncedRendering]);

    return null;
}