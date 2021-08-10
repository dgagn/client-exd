import { deburr, trim } from 'lodash';
import { Database } from '../utils/database-fetch';

export type FilterDatabaseProps = {
    database: Database[];
    searchValue: string;
    groupeImplique: boolean;
    degreViolence: boolean;
    date: boolean;
    type: boolean;
    evenement: boolean;
};

export function filterDatabase({
    database,
    searchValue,
    date,
    degreViolence,
    evenement,
    groupeImplique,
    type,
}: FilterDatabaseProps) {
    return database.filter((entry) => {
        const normalizedEvenement = deburr(entry.evenement.toLowerCase());
        const normalizedGroupeImplique = deburr(entry.groupeImplique.toLowerCase());
        const normalizedDegreViolence = deburr(entry.degreViolence.toLowerCase());
        const normalizedDate = deburr(entry.date.toLowerCase());
        const normalizedType = deburr(entry.type.toLowerCase());
        const normalizedSearch = trim(deburr(searchValue.toLowerCase()));
        const multipleSearch = normalizedSearch.split(',');
        if (multipleSearch.length > 1) {
            const newMap = multipleSearch.map(
                (s) =>
                    (evenement && normalizedEvenement.includes(trim(s))) ||
                    (groupeImplique && normalizedGroupeImplique.includes(trim(s))) ||
                    (degreViolence && normalizedDegreViolence.includes(trim(s))) ||
                    (date && normalizedDate.includes(trim(s))) ||
                    (type && normalizedType.includes(trim(s)))
            );
            return newMap.reduce((prev, current) => prev && current);
        }

        return (
            (evenement && normalizedEvenement.includes(normalizedSearch)) ||
            (groupeImplique && normalizedGroupeImplique.includes(normalizedSearch)) ||
            (degreViolence && normalizedDegreViolence.includes(normalizedSearch)) ||
            (date && normalizedDate.includes(normalizedSearch)) ||
            (type && normalizedType.includes(normalizedSearch))
        );
    });
}