import React, { useMemo } from 'react';
import useStore, { StoreState } from "../store/use-store";
import shallow from "zustand/shallow";

const showMoreSelector = ({ showMoreFilters, toggleShowMoreFilters, resetFilters }: StoreState) => ({ showMoreFilters, toggleShowMoreFilters, resetFilters })

export default function ShowMore() {
    const { showMoreFilters, toggleShowMoreFilters, resetFilters } = useStore(showMoreSelector, shallow);

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
            <button
                    className="button-reset text-bg-fx text-bg-fx--scale-y"
                    onClick={resetFilters}
            >
                Reinitialiser les filtres
            </button>
        </div>
    );
}
