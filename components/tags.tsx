import React from 'react';
import Tag from './tag';
import useStore from '../store/use-store';

export default function Tags() {
    const {
        toggleFilterByDate,
        filterByDate,
        toggleFilterByType,
        toggleFilterByEvents,
        toggleFilterByGroupsInvolved,
        toggleFilterByDegreeOfViolence,
        filterByType,
        filterByGroupsInvolved,
        filterByEvents,
        filterByDegreeOfViolence,
    } = useStore();

    return (
        <ul
            className="flex gap-x-md gap-y-xs flex-wrap font-bold"
            aria-label="La liste de boutons pour pouvoir exclure certaines colonnes de la recherche"
        >
            <Tag onClick={toggleFilterByDate} isSelected={filterByDate}>
                Date
            </Tag>
            <Tag onClick={toggleFilterByType} isSelected={filterByType}>
                Type d’événement
            </Tag>
            <Tag onClick={toggleFilterByDegreeOfViolence} isSelected={filterByDegreeOfViolence}>
                Degré de violence
            </Tag>
            <Tag onClick={toggleFilterByGroupsInvolved} isSelected={filterByGroupsInvolved}>
                Groupe(s) impliqué(s)
            </Tag>
            <Tag onClick={toggleFilterByEvents} isSelected={filterByEvents}>
                Événement
            </Tag>
        </ul>
    );
}
