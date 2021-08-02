import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import axios from "axios";
import useDatabase from '../hooks/useDatabase';

export async function database() {
    const { data } = await axios.get(
        'http://localhost:5000/database'
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
    console.log(database);
    return <>
        <div className='container max-w-adaptive-xl'>
            <div className='mt-xl'>Accueil</div>
        </div>
    </>;
}
