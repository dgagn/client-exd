import React from 'react';
import useStore, { StoreState } from '../store/use-store';
import shallow from 'zustand/shallow';

const showMoreSelector = ({ showMoreFilters, setFilterSearch }: StoreState) => ({
    showMoreFilters,
});

export default function ShowMoreFilters() {
    const { showMoreFilters } = useStore(showMoreSelector, shallow);

    return showMoreFilters ? (
        <div className="flex gap-md flex-wrap@sm show-more-bg p-lg rounded mb-lg">
            <div className="flex-1">
                <span role='img' aria-label='todo'>📝</span> Doit ajouter un filtre pour filtrer par date de début et date de fin.
                <br/>
                <span role='img' aria-label='todo'>📝</span> Permettre à l&apos;utilisateur de sauvegarder les recherches
                <br/>
                <span role='img' aria-label='todo'>📝</span> Permettre à l&apos;utilisateur de télécharger la base de données
            </div>
        </div>
    ) : null;
}
