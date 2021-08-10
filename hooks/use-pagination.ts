// @ts-nocheck
import { useEffect, useMemo } from 'react';
import { store } from '../pages';
import { Database } from './use-database';

interface Pagination {
    numberOfPages: number;
    currentPage: number;
    perPage: number;
    paginatedDatabase: Database[];
    setPaginationValue: (num: number | string) => any;
    paginationValue: string | number;
}

interface DefaultOptions {
    currentPage: number;
    perPage: number;
    value: number;
}

export default function usePagination(): Pagination {
    const database = store((state) => state.database);
    const filteredDatabase = store((state) => state.filteredDatabase);
    const perPage = store((state) => state.perPage);
    const currentPage = store((state) => state.currentPage);
    const setCurrentPage = store((state) => state.setCurrentPage);
    const paginationValue = store((state) => state.paginationValue);
    const setPaginationValue = store((state) => state.setPaginationValue);
    const setPaginatedDatabase = store((state) => state.setPaginatedDatabase);
    const paginatedDatabase = store((state) => state.paginatedDatabase);
    const setNumberOfPages = store((state) => state.setNumberOfPages);

    useEffect(() => {
        if (typeof paginationValue !== 'string' && !Number.isNaN(paginationValue)) {
            setCurrentPage(paginationValue);
        }
    }, [paginationValue, setCurrentPage]);

    useEffect(() => {
        setPaginationValue(1);
    }, [perPage, setPaginationValue]);

    const indexOfLast = useMemo(() => currentPage * perPage, [currentPage, perPage]);
    const indexOfFirst = useMemo(() => indexOfLast - perPage, [indexOfLast, perPage]);
    const numberOfPages = useMemo(
        () => setNumberOfPages(Math.ceil(filteredDatabase!.length / perPage)),
        [filteredDatabase, perPage, setNumberOfPages]
    );

    useEffect(() => {
        if (filteredDatabase)
            setPaginatedDatabase(filteredDatabase.slice(indexOfFirst, indexOfLast));
    }, [database, filteredDatabase, indexOfFirst, indexOfLast, setPaginatedDatabase]);

    return {
        numberOfPages,
        perPage,
        currentPage,
        paginatedDatabase,
        setPaginationValue,
        paginationValue,
    };
}
