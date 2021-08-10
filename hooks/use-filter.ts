import useStore from "../store/use-store";
import { useCallback, useEffect } from "react";
import { debounce } from 'lodash';

export default function useFilter() {
    const { filterByEvents, filterByType, filterByDate, filterSearch, filterByGroupsInvolved, filterByDegreeOfViolence, filterDatabase, database, filteredDatabase } = useStore()

    const debouncedRendering = useCallback(debounce(() => {
        filterDatabase({
            type: filterByType,
            groupeImplique: filterByGroupsInvolved,
            date: filterByDate,
            searchValue: filterSearch,
            evenement: filterByEvents,
            degreViolence: filterByDegreeOfViolence,
            database
        })
        console.log(filteredDatabase);
    }, 300), [filterSearch, filterByDate, filterByType, filterByEvents, filterByGroupsInvolved, filterByDegreeOfViolence, database])

    useEffect(() => {
        debouncedRendering()
    }, [debouncedRendering])

    return null
}