import React, { useEffect, useMemo } from "react";
import useStore, { StoreState } from '../store/use-store';
import shallow from 'zustand/shallow';

const showMoreSelector = ({
    showMoreFilters,
    toggleShowMoreFilters,
    resetFilters,
    filterSearch,
    filterByDate,
    filterByType,
    filterByEvents,
    filteredDatabase,
    database,
    filterByGroupsInvolved,
    filterByDegreeOfViolence,
                              orderByDate,
orderByEvents,
orderByType,
orderByDegreeOfViolence,
orderByGroupsInvolved
}: StoreState) => ({
    showMoreFilters,
    toggleShowMoreFilters,
    resetFilters,
    filterSearch,
    filterByDate,
    filterByType,
    filterByEvents,
    filteredDatabase,
    database,
    filterByGroupsInvolved,
    filterByDegreeOfViolence,
    orderByDate,
    orderByEvents,
    orderByType,
    orderByDegreeOfViolence,
    orderByGroupsInvolved
});

export default function ShowMore() {
    console.log('render');
    const {
        showMoreFilters,
        toggleShowMoreFilters,
        resetFilters,
        filterSearch,
        filterByDate,
        filterByType,
        filterByEvents,
        filteredDatabase,
        database,
        filterByGroupsInvolved,
        filterByDegreeOfViolence,
        orderByDate,
        orderByEvents,
        orderByType,
        orderByDegreeOfViolence,
        orderByGroupsInvolved
    } = useStore(showMoreSelector, shallow);
    const canReset = useMemo(
        () => {
            return filterSearch !== '' ||
                !filterByDate ||
                !filterByType ||
                !filterByEvents ||
                !filterByGroupsInvolved ||
                !filterByDegreeOfViolence ||
                orderByDate !== 'none' ||
                orderByEvents !== 'none' ||
                orderByType !== 'none' ||
                orderByDegreeOfViolence !== 'none' ||
                orderByGroupsInvolved !== 'none'
        },
        [filterSearch, filterByDate, filterByType, filterByEvents, filterByGroupsInvolved, filterByDegreeOfViolence, orderByDate, orderByEvents, orderByType, orderByDegreeOfViolence, orderByGroupsInvolved]
    );

    const showMoreText = useMemo(() => {
        return showMoreFilters
            ? 'Cacher les options de filtre'
            : "Afficher d'autre options de filtre";
    }, [showMoreFilters]);

    return (
        <div className="flex space-between flex-wrap@sm gap-y-xs mb-lg mt-lg">
            <button
                className="button-reset text-bg-fx text-bg-fx--scale-y"
                onClick={toggleShowMoreFilters}
            >
                {showMoreText}
            </button>
            {canReset ? (
                <button
                    className="button-reset text-bg-fx text-bg-fx--scale-y"
                    onClick={resetFilters}
                >
                    Reinitialiser les filtres
                </button>
            ) : (
                <div />
            )}
        </div>
    );
}
