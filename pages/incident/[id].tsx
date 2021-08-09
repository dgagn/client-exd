import React from 'react';
import { database } from "../index";
import { Database } from "../../hooks/use-database";

export async function getStaticPaths() {
    const db = await database()
    const paths = db.map((entry: Database) => {
        return {
            params: { id: entry._id }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(ctx: any) {
    const db: Database[] = await database()
    const id = ctx.params.id

    const entry = db.filter((entry: Database) => {
        return entry._id === id
    })

    return {
        props: {
            entry: entry
        }
    }
}

export default function Id({ entry }: any) {
    return <div className='container max-w-xl'>
        <div className='mt-2xl mb-lg'>
            {JSON.stringify(entry)}
        </div>
    </div>;
}
