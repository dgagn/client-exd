import { deburr, trim } from 'lodash';
import { Database } from './fetch-database';

export type FilterDatabaseProps = {
    database: Database[];
    filterSearch: string;
    groupsInvolved: boolean;
    degreeOfViolence: boolean;
    date: boolean;
    type: boolean;
    events: boolean;
};

export default function filterDatabase({
    database,
    filterSearch,
    date,
    degreeOfViolence,
    events,
    groupsInvolved,
    type,
}: FilterDatabaseProps) {
    return database.filter((entry) => {
        const normalizedEvenement = deburr(entry.evenement.toLowerCase());
        const normalizedGroupeImplique = deburr(entry.groupeImplique.toLowerCase());
        const normalizedDegreViolence = deburr(entry.degreViolence.toLowerCase());
        const normalizedDate = deburr(entry.date.toLowerCase());
        const normalizedType = deburr(entry.type.toLowerCase());
        const normalizedSearch = trim(deburr(filterSearch.toLowerCase()));
        const multipleSearch = normalizedSearch.split(',');
        const hasExclude = normalizedSearch.startsWith('!');
        const finalSearch = hasExclude ? normalizedSearch.replace('!', '') : normalizedSearch;

        if (finalSearch === '') {
            return true;
        }

        if (multipleSearch.length > 1) {
            const newMap = multipleSearch.map((s) => {
                const normalizedSearch = deburr(trim(s));
                const hasExclude = normalizedSearch.startsWith('!');
                const finalSearch = hasExclude
                    ? normalizedSearch.replace('!', '')
                    : normalizedSearch;
                if (finalSearch === '') {
                    return true;
                }
                if (hasExclude) {
                    return (
                        !normalizedEvenement.includes(finalSearch) &&
                        !normalizedGroupeImplique.includes(finalSearch) &&
                        !normalizedDegreViolence.includes(finalSearch) &&
                        !normalizedDate.includes(finalSearch) &&
                        !normalizedType.includes(finalSearch)
                    );
                }

                return (
                    (events && normalizedEvenement.includes(finalSearch)) ||
                    (groupsInvolved && normalizedGroupeImplique.includes(finalSearch)) ||
                    (degreeOfViolence && normalizedDegreViolence.includes(finalSearch)) ||
                    (date && normalizedDate.includes(finalSearch)) ||
                    (type && normalizedType.includes(finalSearch))
                );
            });
            return newMap.reduce((prev, current) => prev && current);
        }

        if (hasExclude) {
            return (
                !normalizedEvenement.includes(finalSearch) &&
                !normalizedGroupeImplique.includes(finalSearch) &&
                !normalizedDegreViolence.includes(finalSearch) &&
                !normalizedDate.includes(finalSearch) &&
                !normalizedType.includes(finalSearch)
            );
        }

        return (
            (events && normalizedEvenement.includes(finalSearch)) ||
            (groupsInvolved && normalizedGroupeImplique.includes(finalSearch)) ||
            (degreeOfViolence && normalizedDegreViolence.includes(finalSearch)) ||
            (date && normalizedDate.includes(finalSearch)) ||
            (type && normalizedType.includes(finalSearch))
        );
    });
}