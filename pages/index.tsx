import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import axios from "axios";
import useDatabase, { Database } from '../hooks/useDatabase';

export async function database() {
    const { data } = await axios.get(
        'https://server-exd.herokuapp.com/database'
    );
    return data;
}

export async function getStaticProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('database', database);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default function Home() {
    const database = useDatabase()
    return <>
        <div className='container max-w-adaptive-xl'>
            <div className='mt-xl'>Accueil</div>
            {database!.map((entry) => (
                <h1 key={entry._id}>{entry.date}</h1>
            ))}
        </div>
    </>;
}
