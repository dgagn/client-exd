import { Database } from '../utils/fetch-database';
import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';
import { orderBy } from 'lodash';
import filterDatabase from '../utils/filter-database';

type OrderByValues = 'asc' | 'desc' | 'none';
type OrderByKeys = 'date' | 'type' | 'degreViolence' | 'evenement' | 'groupeImplique';

export interface FilterSlice {
    orderDatabase: () => void;

    toggleOrderByDate: () => void;
    orderByDate: string;

    toggleOrderByType: () => void;
    orderByType: string;

    orderByDegreeOfViolence: string;
    toggleOrderByDegreeOfViolence: () => void;

    orderByGroupsInvolved: string;
    toggleOrderByGroupsInvolved: () => void;

    orderByEvents: string;
    toggleOrderByEvents: () => void;

    orderIncidentByYear: string;
    toggleOrderIncidentByYear: () => void;

    orderYearByIncident: string;
    toggleOrderYearByIncident: () => void;

    orderIncidentByGroup: string;
    toggleOrderIncidentByGroup: () => void;

    orderGroupByIncident: string;
    toggleOrderGroupByIncident: () => void;
}

const createFilterSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
    orderDatabase: () => {
        const keys: OrderByKeys[] & Function[] = [];
        const orders: any[] = [];

        get().orderByDate !== 'none' &&
            keys.push((o: Database) => {
                return get().orderByDegreeOfViolence !== 'none'
                    ? new Date(o.date).getFullYear()
                    : o.date;
            }) &&
            orders.push(get().orderByDate);
        get().orderByType !== 'none' && keys.push('type') && orders.push(get().orderByType);
        get().orderByEvents !== 'none' &&
            keys.push('evenement') &&
            orders.push(get().orderByEvents);
        get().orderByGroupsInvolved !== 'none' &&
            keys.push('groupeImplique') &&
            orders.push(get().orderByGroupsInvolved);
        get().orderByDegreeOfViolence !== 'none' &&
            keys.push((o: Database) => o.degreViolence.replace(/.*\(/gim, '')) &&
            orders.push(get().orderByDegreeOfViolence);

        if (keys.length <= 0 && orders.length <= 0) {
            set({
                filteredDatabase: filterDatabase({
                    database: get().database,
                    filterSearch: get().filterSearch,
                    events: get().filterByEvents,
                    date: get().filterByDate,
                    degreeOfViolence: get().filterByDegreeOfViolence,
                    groupsInvolved: get().filterByGroupsInvolved,
                    type: get().filterByType,
                }),
            });
        } else {
            set({
                filteredDatabase: orderBy(get().filteredDatabase, keys, orders),
            });
        }
    },

    orderByDate: 'none',
    toggleOrderByDate: () => {
        const value = get().orderByDate;
        if (value === 'none') {
            set({ orderByDate: 'desc' });
            get().orderDatabase();
        } else if (value === 'desc') {
            set({ orderByDate: 'asc' });
            get().orderDatabase();
        } else if (value === 'asc') {
            set({ orderByDate: 'none' });
            get().orderDatabase();
        }
    },

    orderByType: 'none',
    toggleOrderByType: () => {
        const value = get().orderByType;
        if (value === 'none') {
            set({ orderByType: 'desc' });
            get().orderDatabase();
        } else if (value === 'desc') {
            set({ orderByType: 'asc' });
            get().orderDatabase();
        } else if (value === 'asc') {
            set({ orderByType: 'none' });
            get().orderDatabase();
        }
    },

    orderByDegreeOfViolence: 'none',
    toggleOrderByDegreeOfViolence: () => {
        const value = get().orderByDegreeOfViolence;
        if (value === 'none') {
            set({ orderByDegreeOfViolence: 'desc' });
            get().orderDatabase();
        } else if (value === 'desc') {
            set({ orderByDegreeOfViolence: 'asc' });
            get().orderDatabase();
        } else if (value === 'asc') {
            set({ orderByDegreeOfViolence: 'none' });
            get().orderDatabase();
        }
    },

    orderByGroupsInvolved: 'none',
    toggleOrderByGroupsInvolved: () => {
        const value = get().orderByGroupsInvolved;
        if (value === 'none') {
            set({ orderByGroupsInvolved: 'desc' });
            get().orderDatabase();
        } else if (value === 'desc') {
            set({ orderByGroupsInvolved: 'asc' });
            get().orderDatabase();
        } else if (value === 'asc') {
            set({ orderByGroupsInvolved: 'none' });
            get().orderDatabase();
        }
    },

    orderByEvents: 'none',
    toggleOrderByEvents: () => {
        const value = get().orderByEvents;
        if (value === 'none') {
            set({ orderByEvents: 'desc' });
            get().orderDatabase();
        } else if (value === 'desc') {
            set({ orderByEvents: 'asc' });
            get().orderDatabase();
        } else if (value === 'asc') {
            set({ orderByEvents: 'none' });
            get().orderDatabase();
        }
    },

    orderIncidentByYear: 'none',
    toggleOrderIncidentByYear: () => {
        const value = get().orderIncidentByYear;
        if (value === 'none') {
            set({ orderIncidentByYear: 'desc' });
        } else if (value === 'desc') {
            set({ orderIncidentByYear: 'asc' });
        } else if (value === 'asc') {
            set({ orderIncidentByYear: 'none' });
        }
    },
    orderYearByIncident: 'none',
    toggleOrderYearByIncident: () => {
        const value = get().orderYearByIncident;
        if (value === 'none') {
            set({ orderYearByIncident: 'desc' });
        } else if (value === 'desc') {
            set({ orderYearByIncident: 'asc' });
        } else if (value === 'asc') {
            set({ orderYearByIncident: 'none' });
        }
    },
    orderIncidentByGroup: 'none',
    toggleOrderIncidentByGroup: () => {
        const value = get().orderIncidentByGroup;
        if (value === 'none') {
            set({ orderIncidentByGroup: 'desc' });
        } else if (value === 'desc') {
            set({ orderIncidentByGroup: 'asc' });
        } else if (value === 'asc') {
            set({ orderIncidentByGroup: 'none' });
        }
    },
    orderGroupByIncident: 'none',
    toggleOrderGroupByIncident: () => {
        const value = get().orderGroupByIncident;
        if (value === 'none') {
            set({ orderGroupByIncident: 'desc' });
        } else if (value === 'desc') {
            set({ orderGroupByIncident: 'asc' });
        } else if (value === 'asc') {
            set({ orderGroupByIncident: 'none' });
        }
    },
});

export default createFilterSlice;