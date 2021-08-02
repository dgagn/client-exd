import { useQuery } from 'react-query';
import { database } from '../pages';

export interface Database {
    _id: string;
    date: string;
    type: string;
    typeCrime: string;
    degreViolence: string;
    groupeImplique: string;
    evenement: string;
    description: string;
    source: string;
}

export default function useDatabase() {
    const { data } = useQuery<Database[]>('database', database, {
        staleTime: 30000
    });
    return data
}