import React from 'react';
import useStore, { StoreState } from '../store/use-store';
import shallow from 'zustand/shallow';

const showMoreSelector = ({ showMoreFilters, setFilterSearch }: StoreState) => ({
    showMoreFilters,
    setFilterSearch,
});

export default function ShowMoreFilters() {
    const { showMoreFilters, setFilterSearch } = useStore(showMoreSelector, shallow);

    return showMoreFilters ? (
        <div className="flex gap-md flex-wrap@sm bg-primary-50 p-lg rounded mb-lg">
            <div className="flex-1">
                <span role='img' aria-label='todo'>📝</span> Doit ajouter un filtre pour filtrer par date de début et date de fin.
                <br/>
                <span role='img' aria-label='todo'>📝</span> Permettre à l&apos;utilisateur de sauvegarder les recherches
                <br/>
                <span role='img' aria-label='todo'>📝</span> Permettre à l&apos;utilisateur de télécharger la base de données
                <br/><br/>
                Example de recherche complexes:
                <br />
                <button
                    className="button-reset text-bg-fx text-bg-fx--scale-y"
                    onClick={() => setFilterSearch('!atalante, elevee')}
                >
                    !atalante, elevee
                </button>
                <br />
                <button
                    className="button-reset text-bg-fx text-bg-fx--scale-y"
                    onClick={() => setFilterSearch('atalante, elevee, !la meute')}
                >
                    atalante, elevee, !la meute
                </button>
                <br />
                <button
                    className="button-reset text-bg-fx text-bg-fx--scale-y"
                    onClick={() => setFilterSearch('elevee, montreal')}
                >
                    elevee, montreal
                </button>
            </div>
        </div>
    ) : null;
}
