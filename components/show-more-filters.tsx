import React from 'react';
import useStore from "../store/use-store";

export default function ShowMoreFilters() {
    const showMoreFilters = useStore((state) => state.showMoreFilters);

    return showMoreFilters ? (
        <div className="flex gap-md flex-wrap@sm bg-primary-50 p-lg rounded mb-lg">
            <div className="flex-1">test</div>
        </div>
    ) : null;
}
