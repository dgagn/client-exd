import useStore from '../store/use-store';
import { useCallback, useEffect } from 'react';
import { debounce } from 'lodash';

export default function useFilter() {
    const {
        filterByEvents,
        filterByType,
        filterByDate,
        filterSearch,
        filterByGroupsInvolved,
        filterByDegreeOfViolence,
        filterDatabase,
        database,
    } = useStore();

    const debouncedRendering = useCallback(
        debounce(() => {
            filterDatabase({
                type: filterByType,
                groupsInvolved: filterByGroupsInvolved,
                date: filterByDate,
                filterSearch: filterSearch,
                events: filterByEvents,
                degreeOfViolence: filterByDegreeOfViolence,
                database,
            });
        }, 50),
        [
            filterSearch,
            filterByDate,
            filterByType,
            filterByEvents,
            filterByGroupsInvolved,
            filterByDegreeOfViolence,
            database,
        ]
    );

    useEffect(() => {
        debouncedRendering();
    }, [debouncedRendering]);

    return null;
}