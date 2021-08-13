import useStore, { StoreState } from '../store/use-store';
import shallow from 'zustand/shallow';
import Search from './search';
import React from 'react';

const searchGroups = ({ groupsFilterSearch, handleGroupsFilterSearch }: StoreState) => ({
    groupsFilterSearch,
    handleGroupsFilterSearch,
});

interface SearchGroupsFilterProps {
    className?: string
}

export default function SearchGroupsFilter({ className }: SearchGroupsFilterProps) {
    const { handleGroupsFilterSearch, groupsFilterSearch } = useStore(searchGroups, shallow);
    return (
        <Search className={className} value={groupsFilterSearch} onChange={handleGroupsFilterSearch} id="groupsFilter" />
    );
}