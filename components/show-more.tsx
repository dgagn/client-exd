import React, { useMemo } from 'react';
import useStore from '../store/use-store';

export default function ShowMore() {
    const showMoreFilters = useStore((state) => state.showMoreFilters);
    const toggleShowMoreFilters = useStore((state) => state.toggleShowMoreFilters);

    const showMoreText = useMemo(() => {
        return showMoreFilters
            ? 'Cacher les options de filtre'
            : "Afficher d'autre options de filtre";
    }, [showMoreFilters]);

    return (
        <div className="flex space-between flex-wrap@sm gap-y-xs mb-lg">
            <button
                className="button-reset text-bg-fx text-bg-fx--scale-y"
                onClick={toggleShowMoreFilters}
            >
                {showMoreText}
            </button>
        </div>
    );
}
