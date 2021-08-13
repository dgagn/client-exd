import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';
import { Database } from '../utils/fetch-database';
import { deburr, orderBy } from 'lodash';
import dayjs from "dayjs";
import { DatabaseByGroups } from "./create-database-slice";
import prepareDestination from "next/dist/next-server/lib/router/utils/prepare-destination";

export interface OrderSlice {
    orderByDate: string;
    toggleOrderByDate: () => void;
    orderDatabase: (filteredDatabase: Database[]) => Database[];

    orderByDegreeOfViolence: string;
    toggleOrderByDegreeOfViolence: () => void;

    orderByEvents: string;
    toggleOrderByEvents: () => void;

    orderByGroupsInvolved: string;
    toggleOrderByGroupsInvolved: () => void;

    orderByType: string,
    toggleOrderByType: () => void;

    orderEventsByGroupsInvolved: string,
    toggleOrderEventsByGroupsInvolved: () => void

    orderSubDatabase: (database: DatabaseByGroups[]) => DatabaseByGroups[]

    orderEventsByData: string,
    toggleOrderEventsByData: () => void
}


export default function createOrderSlice(set: SetState<StoreState>, get: GetState<StoreState>): OrderSlice {
    return {
        orderByDate: "none",
        toggleOrderByDate: () => {
            set({ orderByDate: get().orderByDate === "none" ? "desc" : get().orderByDate === "desc" ? "asc" : get().orderByDate === "asc" ? "none" : "none" });
            set({ filteredDatabase: get().orderDatabase(get().filteredDatabase) });
        },

        orderByDegreeOfViolence: "none",
        toggleOrderByDegreeOfViolence: () => {
            set({ orderByDegreeOfViolence: get().orderByDegreeOfViolence === "none" ? "desc" : get().orderByDegreeOfViolence === "desc" ? "asc" : get().orderByDegreeOfViolence === "asc" ? "none" : "none" });
            set({ filteredDatabase: get().orderDatabase(get().filteredDatabase) });
        },

        orderByEvents: "none",
        toggleOrderByEvents: () => {
            set({ orderByEvents: get().orderByEvents === "none" ? "desc" : get().orderByEvents === "desc" ? "asc" : get().orderByEvents === "asc" ? "none" : "none" });
            set({ filteredDatabase: get().orderDatabase(get().filteredDatabase) });
        },

        orderByGroupsInvolved: "none",
        toggleOrderByGroupsInvolved: () => {
            set({ orderByGroupsInvolved: get().orderByGroupsInvolved === "none" ? "desc" : get().orderByGroupsInvolved === "desc" ? "asc" : get().orderByGroupsInvolved === "asc" ? "none" : "none" });
            set({ filteredDatabase: get().orderDatabase(get().filteredDatabase) });
        },

        orderByType: "none",
        toggleOrderByType: () => {
            set({ orderByType: get().orderByType === "none" ? "desc" : get().orderByType === "desc" ? "asc" : get().orderByType === "asc" ? "none" : "none" });
            set({ filteredDatabase: get().orderDatabase(get().filteredDatabase) });
        },

        orderEventsByGroupsInvolved: 'none',
        toggleOrderEventsByGroupsInvolved: () => {
            set({ orderEventsByGroupsInvolved: get().orderEventsByGroupsInvolved === "none" ? "desc" : get().orderEventsByGroupsInvolved === "desc" ? "asc" : get().orderEventsByGroupsInvolved === "asc" ? "none" : "none" });
            set({ filteredDatabaseByGroups: get().orderSubDatabase(get().filteredDatabaseByGroups) })
        },

        orderEventsByData: 'none',
        toggleOrderEventsByData: () => {
            set({ orderEventsByData: get().orderEventsByData === "none" ? "desc" : get().orderEventsByData === "desc" ? "asc" : get().orderEventsByData === "asc" ? "none" : "none" });
            set({ filteredDatabaseByGroups: get().orderSubDatabase(get().filteredDatabaseByGroups) })
        },

        orderSubDatabase: (database: DatabaseByGroups[]) => {
            const keys = [];
            const orders: string[] = [];

            const orderEventsByGroupsInvolved = get().orderEventsByGroupsInvolved
            const orderEventsByData = get().orderEventsByData

            if(orderEventsByData === 'none' && orderEventsByGroupsInvolved === 'none') {
                keys.push('data') && orders.push('desc')
            }

            orderEventsByData !== "none" &&
            keys.push('data') && orders.push(orderEventsByData);

            orderEventsByGroupsInvolved !== "none" &&
            keys.push((o: DatabaseByGroups) => deburr(o.label)) && orders.push(orderEventsByGroupsInvolved);

            return orderBy(database, keys, <"asc" | "desc"[]>orders);
        },

        orderDatabase: (filteredDatabase: Database[]) => {
            const keys = [];
            const orders: string[] = [];

            const orderByDate = get().orderByDate;
            const orderByDegreeOfViolence = get().orderByDegreeOfViolence;
            const orderByEvents = get().orderByEvents;
            const orderByGroupsInvolved = get().orderByGroupsInvolved;
            const orderByType = get().orderByType;

            if(orderByDate === 'none' && orderByDegreeOfViolence === 'none' && orderByEvents === 'none' && orderByGroupsInvolved === 'none' && orderByType === 'none') {
                keys.push('date') && orders.push('asc')
            }

            orderByDate !== "none" &&
            keys.push((o: Database) => {
                return orderByDegreeOfViolence !== "none" || orderByEvents !== 'none' || orderByGroupsInvolved !== 'none' || orderByType !== 'none'
                        ? dayjs(o.date).format('YYYY-MM')
                        : o.date;
            }) &&
            orders.push(orderByDate);

            orderByDegreeOfViolence !== "none" &&
            keys.push((o: Database) => o.degreViolence.replace(/.*\(/gim, "")) &&
            orders.push(orderByDegreeOfViolence);

            orderByEvents !== "none" &&
            keys.push((o: Database) => deburr(o.evenement)) && orders.push(orderByEvents);

            orderByGroupsInvolved !== "none" &&
            keys.push((o: Database) => o.groupeImplique.split('\n').map(e => deburr(e))) && orders.push(orderByGroupsInvolved);

            orderByType !== "none" &&
            keys.push((o: Database) => deburr(o.type)) && orders.push(orderByType);

            orders.length > 1 && orders.push('asc') && keys.push('_id')

            return orderBy(filteredDatabase, keys, <"asc" | "desc"[]>orders);
        }
    };
};
