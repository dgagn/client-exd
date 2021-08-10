import React from 'react';
import useStore, { StoreState } from '../store/use-store';
import shallow from 'zustand/shallow';

const showMoreSelector = ({ showMoreFilters }: StoreState) => ({ showMoreFilters });

export default function ShowMoreFilters() {
    const { showMoreFilters } = useStore(showMoreSelector, shallow);

    return showMoreFilters ? (
        <div className="flex gap-md flex-wrap@sm bg-primary-50 p-lg rounded mb-lg">
            <div className="flex-1">test</div>
        </div>
    ) : null;
}
